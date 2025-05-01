from fastapi import HTTPException, status
from sqlalchemy import select, exists, delete
from sqlalchemy.ext.asyncio import AsyncSession

from core.models import Article, Tag, ArticleTag


async def delete_unused_tags(session: AsyncSession) -> None:
    """
    Internal helper to clean up tags not associated with any articles.

    This function:
    - Identifies tags with no article associations
    - Performs batch deletion of orphaned tags
    - Commits transaction upon completion

    Args:
        session: Async database session for operations.
    """
    # Find tags not referenced in ArticleTag junction table
    unused_tags_query = select(Tag).where(~exists().where(ArticleTag.tag_id == Tag.id))
    result = await session.execute(unused_tags_query)
    unused_tags = result.scalars().all()

    # Delete if any found
    if unused_tags:
        await session.execute(delete(Tag).where(Tag.id.in_(t.id for t in unused_tags)))
        await session.commit()


async def process_tags(session: AsyncSession, tag_names: list[str]) -> list[Tag]:
    """
    Internal helper to process tag names into Tag instances.

    This function:
    - Checks for existing tags by name
    - Creates new tags for non-existent names
    - Returns list of all processed Tag instances

    Args:
        session: Async database session for operations.
        tag_names: List of tag names to process.

    Returns:
        list[Tag]: Processed Tag instances (existing and new).
    """
    processed_tags = []
    for name in tag_names:
        # Check if tag exists
        stmt = select(Tag).where(Tag.name == name)
        result = await session.execute(stmt)
        tag = result.scalar_one_or_none()

        # Create new tag if needed
        if not tag:
            tag = Tag(name=name)
            session.add(tag)
            await session.flush()  # Get ID for new tag

        processed_tags.append(tag)

    await session.commit()
    return processed_tags


async def sync_article_tags(
    session: AsyncSession, article: Article, new_tag_names: list[str]
) -> None:
    """
    Internal helper to synchronize article's tags with provided list.

    This function:
    - Calculates difference between current and desired tags
    - Adds new tag associations
    - Removes obsolete tag associations
    - Manages transactions automatically

    Args:
        session: Async database session for operations.
        article: Article to synchronize tags for.
        new_tag_names: List of desired tag names.
    """
    # Refresh to ensure we have current tags
    await session.refresh(article, ["article_tags"])

    # Get current tags as set of names
    current_tags = {tag.name for tag in article.tags}
    new_tags = set(new_tag_names)

    # Calculate tags to remove (in current but not in new)
    tags_to_remove = current_tags - new_tags
    if tags_to_remove:
        # Find junction table entries to delete
        stmt = (
            select(ArticleTag)
            .join(Tag)
            .where(
                (ArticleTag.article_id == article.id) & (Tag.name.in_(tags_to_remove))
            )
        )
        result = await session.execute(stmt)
        for article_tag in result.scalars():
            await session.delete(article_tag)

    # Calculate tags to add (in new but not in current)
    tags_to_add = new_tags - current_tags
    if tags_to_add:
        for tag_name in tags_to_add:
            # Get or create tag
            tag_result = await session.execute(select(Tag).where(Tag.name == tag_name))
            tag = tag_result.scalar_one_or_none()

            if not tag:
                tag = Tag(name=tag_name)
                session.add(tag)
                await session.flush()

            # Create new association
            session.add(ArticleTag(article_id=article.id, tag_id=tag.id))

    await session.commit()


def validate_tags(tags: list[str], max_tags: int) -> None:
    if len(tags) > max_tags:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Maximum {max_tags} tags allowed",
        )
