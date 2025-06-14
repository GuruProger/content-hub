from datetime import datetime
from typing import Sequence

from fastapi import HTTPException, status
from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload, load_only


from core.models import Article, ArticleTag
from core.schemas.article import ArticleCreateSchema, ArticleUpdateSchema
from core.config import settings
from utils.article_utils import (
    delete_unused_tags,
    process_tags,
    sync_article_tags,
    validate_tags,
)
from utils.decorators import article_error_handler


@article_error_handler
async def create_article(
    session: AsyncSession,
    article_create: ArticleCreateSchema,
) -> Article:
    """
    Create a new article with tags in the database.
    Handles article creation, tag processing, and database transactions.

    :param session: AsyncSession for database interaction
    :param article_create: Article creation data (including tags)
    :return: The created article with loaded tags
    """
    # Extract article data excluding tags (handled separately)
    article_data = article_create.model_dump(exclude={"tags"})
    article = Article(**article_data)
    session.add(article)
    await session.flush()  # Flush to get the article ID before adding tags

    # Process tags if provided
    if article_create.tags:
        validate_tags(article_create.tags, settings.article.max_tags)

        # Get or create tags and associate with article
        tags = await process_tags(session, article_create.tags)
        for tag in tags:
            session.add(ArticleTag(article_id=article.id, tag_id=tag.id))

    # Commit transaction
    await session.commit()

    # Refresh to load relationships
    await session.refresh(article, ["article_tags"])
    return article


@article_error_handler
async def get_article(
    session: AsyncSession,
    article_id: int,
) -> Article:
    """
    Retrieve an article with its tags by ID.
    Uses eager loading for tags to avoid N+1 query problem.

    :param session: AsyncSession for database interaction
    :param article_id: ID of the article to retrieve
    :return: Article with loaded tags
    """
    # Build query with eager loading of tags
    stmt = (
        select(Article)
        .where(Article.id == article_id)
        .options(
            selectinload(
                Article.article_tags
            ).selectinload(  # Load through junction table
                ArticleTag.tag
            )  # Then load actual tags
        )
    )
    result = await session.execute(stmt)
    article = result.scalar_one_or_none()

    if not article:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Article not found"
        )

    return article


@article_error_handler
async def update_article(
    session: AsyncSession,
    article_id: int,
    article_update: ArticleUpdateSchema,
) -> Article:
    """
    Update an article and its tags.
    Handles partial updates and tag synchronization.

    :param session: AsyncSession for database interaction
    :param article_id: ID of the article to update
    :param article_update: Article update data (including optional tags)
    :return: Updated article with loaded tags
    """
    # Load article with tags
    stmt = (
        select(Article)
        .where(Article.id == article_id)
        .options(selectinload(Article.article_tags).selectinload(ArticleTag.tag))
    )
    result = await session.execute(stmt)
    article = result.scalar_one_or_none()

    if not article:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Article not found"
        )

    # Apply partial update to article fields
    update_data = article_update.model_dump(
        exclude_unset=True,  # Only include provided fields
        exclude={"tags"},  # Handle tags separately
    )
    for field, value in update_data.items():
        setattr(article, field, value)

    # Process tags if provided in update
    if article_update.tags is not None:
        validate_tags(article_update.tags, settings.article.max_tags)

        # Synchronize tags (add new, remove unused)
        await sync_article_tags(
            session=session, article=article, new_tag_names=article_update.tags
        )

    # Update the article in the database before commit
    await session.flush()

    # Commit changes
    await session.commit()

    # Fully refresh the article object from the database
    await session.refresh(article)

    return article


@article_error_handler
async def delete_article(
    session: AsyncSession,
    article_id: int,
    cleanup_unused_tags: bool = True,
) -> None:
    """
    Delete an article and optionally remove unused tags.
    Performs cleanup of orphaned tags if requested.

    :param session: AsyncSession for database interaction
    :param article_id: ID of the article to delete
    :param cleanup_unused_tags: If True, removes tags not used in other articles
    """
    # Get article (simple load without relationships)
    article = await session.get(Article, article_id)
    if not article:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Article not found"
        )

    await session.delete(article)
    await session.commit()

    # Clean up unused tags if requested
    if cleanup_unused_tags:
        await delete_unused_tags(session)


@article_error_handler
async def get_suggested_articles(
    session: AsyncSession,
    count: int = 5,
    random_fallback: bool = True,
    tags: list[str] = None,
    start_date: datetime = None,
    end_date: datetime = None,
    user_id: int = None,
    include_content: bool = False,
) -> Sequence[Article]:
    """
    Get suggested articles with optional filtering by tags and date range.
    Serves as placeholder for more sophisticated recommendation logic.

    :param session: AsyncSession for database interaction
    :param count: Number of articles to return (1-20)
    :param random_fallback: Use random selection if no recommendations available
    :param tags: Optional list of tag names to filter articles
    :param start_date: Optional start date for filtering articles
    :param end_date: Optional end date for filtering articles
    :param user_id: Optional user_id to filter articles by user
    :param include_content: If True, include article content in result
    :return: List of suggested articles with loaded tags
    """
    # Validate count parameter
    if not 1 <= count <= 20:
        raise ValueError("count must be between 1 and 20")

    # Base query
    load_fields = [
        Article.id,
        Article.title,
        Article.rating,
        Article.user_id,
        Article.created_at,
        Article.updated_at,
        Article.is_published,
    ]
    if include_content:
        load_fields.append(Article.content)

    query = select(Article).options(
        selectinload(Article.article_tags).selectinload(ArticleTag.tag),
        load_only(*load_fields),
    )

    # Add date range filter if provided
    if start_date:
        query = query.where(Article.created_at >= start_date)
    if end_date:
        query = query.where(Article.created_at <= end_date)

    # Add tag filter if provided
    if tags and len(tags) > 0:
        # Use subquery to filter articles that have all requested tags
        from sqlalchemy import and_
        from core.models import Tag

        # For each tag, create a condition
        tag_conditions = []
        for tag_name in tags:
            # Create a subquery for each tag to match
            subquery = (
                select(ArticleTag.article_id)
                .join(Tag, ArticleTag.tag_id == Tag.id)
                .where(Tag.name == tag_name)
                .scalar_subquery()
            )
            tag_conditions.append(Article.id.in_(subquery))

        # Add all tag conditions to the main query
        if tag_conditions:
            query = query.where(and_(*tag_conditions))

    if user_id is not None:
        query = query.where(Article.user_id == user_id)

    # Random ordering if random_fallback is True
    if random_fallback:
        query = query.order_by(func.random())

    # Apply limit
    query = query.limit(count)

    # Execute query
    result = await session.execute(query)
    articles = result.scalars().all()
    return articles
