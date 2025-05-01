from typing import Sequence

from fastapi import HTTPException, status
from sqlalchemy import func, select, exists, delete
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload, load_only


from core.models import Article, Tag, ArticleTag
from core.schemas.article import ArticleCreateSchema, ArticleUpdateSchema
from core.config import settings
from utils.article_utils import (
    delete_unused_tags,
    process_tags,
    sync_article_tags,
    validate_tags,
)


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
    :raises HTTPException:
        - 400 if validation fails (e.g., too many tags)
        - 500 for database errors
        - 400 for other validation errors
    """
    try:
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

    except SQLAlchemyError as e:
        await session.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Database error: {str(e)}",
        )
    except HTTPException:
        # Re-raise existing HTTP exceptions
        raise
    except Exception as e:
        await session.rollback()
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Validation error: {str(e)}",
        )


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
    :raises HTTPException:
        - 404 if article not found
        - 500 for database errors
    """
    try:
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

    except SQLAlchemyError as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Database error: {str(e)}",
        )


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
    :raises HTTPException:
        - 404 if article not found
        - 400 for validation errors (e.g., too many tags)
        - 500 for database errors
    """
    try:
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

        await session.commit()

        # Refresh to get updated state
        await session.refresh(article, ["article_tags"])
        return article

    except SQLAlchemyError as e:
        await session.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Database error: {str(e)}",
        )
    except HTTPException:
        raise
    except Exception as e:
        await session.rollback()
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Validation error: {str(e)}",
        )


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
    :raises HTTPException:
        - 404 if article not found
        - 500 for database errors
    """
    try:
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

    except SQLAlchemyError as e:
        await session.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Database error: {str(e)}",
        )


async def get_user_articles(
    session: AsyncSession,
    user_id: int,
) -> Sequence[Article]:
    """
    Retrieve all articles for a user (excluding content) with their tags.
    Optimized for listing - doesn't load article content.

    :param session: AsyncSession for database interaction
    :param user_id: ID of the user whose articles to retrieve
    :return: List of articles (without content) with loaded tags
    :raises HTTPException: 500 for database errors
    """
    try:
        # Build optimized query for listing
        stmt = (
            select(Article)
            .where(Article.user_id == user_id)
            .options(
                # Eager load tags
                selectinload(Article.article_tags).selectinload(ArticleTag.tag),
                # Only select specific columns (exclude content)
                load_only(
                    Article.id,
                    Article.title,
                    Article.rating,
                    Article.user_id,
                    Article.created_at,
                    Article.updated_at,
                    Article.is_published,
                ),
            )
        )
        result = await session.execute(stmt)
        articles = result.scalars().all()

        return articles

    except SQLAlchemyError as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Database error: {str(e)}",
        )


async def get_suggested_articles(
    session: AsyncSession,
    count: int = 5,
    random_fallback: bool = True,
) -> Sequence[Article]:
    """
    Get suggested articles (currently random, to be replaced with recommendation system later).
    Serves as placeholder for more sophisticated recommendation logic.

    :param session: AsyncSession for database interaction
    :param count: Number of articles to return (1-20)
    :param random_fallback: Use random selection if no recommendations available
    :return: List of suggested articles with loaded tags
    :raises HTTPException:
        - 400 if invalid count
        - 500 for database errors
    """
    try:
        # Validate count parameter
        if not 1 <= count <= 20:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="count must be between 1 and 20",
            )

        # Currently implements random fallback only
        if random_fallback:
            stmt = (
                select(Article)
                .options(
                    # Eager load tags
                    selectinload(Article.article_tags).selectinload(ArticleTag.tag),
                    # Optimize for listing
                    load_only(
                        Article.id,
                        Article.title,
                        Article.rating,
                        Article.user_id,
                        Article.created_at,
                        Article.updated_at,
                        Article.is_published,
                    ),
                )
                .order_by(func.random())  # Random ordering
                .limit(count)
            )

            result = await session.execute(stmt)
            articles = result.scalars().all()
            return articles

        # Placeholder for future recommendation logic
        return []

    except SQLAlchemyError as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Database error: {str(e)}",
        )
