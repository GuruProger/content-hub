from typing import List, Set
from sqlalchemy import delete, select
from sqlalchemy.ext.asyncio import AsyncSession

from core.models import Article, ArticleTag, Tag


def validate_tags(tags: List[str], max_tags: int) -> None:
    """Validate tag list to ensure it doesn't exceed maximum tag count."""
    if len(tags) > max_tags:
        raise ValueError(f"Maximum number of tags ({max_tags}) exceeded.")

    # Проверка на пустые теги
    for tag in tags:
        if not tag.strip():
            raise ValueError("Empty tags are not allowed")


async def process_tags(session: AsyncSession, tag_names: List[str]) -> List[Tag]:
    """Get or create tags by name and return Tag objects."""
    tags = []
    for name in tag_names:
        name = name.strip().lower()  # Нормализуем название тега

        # Поиск существующего тега
        stmt = select(Tag).where(Tag.name == name)
        result = await session.execute(stmt)
        tag = result.scalar_one_or_none()

        # Создание нового тега, если не найден
        if tag is None:
            tag = Tag(name=name)
            session.add(tag)
            await session.flush()  # Получаем ID для нового тега

        tags.append(tag)

    return tags


async def sync_article_tags(
    session: AsyncSession, article: Article, new_tag_names: List[str]
) -> None:
    """
    Synchronize article tags with the provided list.
    Adds new tags and removes unused ones.
    """
    # Нормализуем имена тегов
    new_tag_names = [name.strip().lower() for name in new_tag_names]

    # Получаем существующие теги статьи
    existing_tags = {at.tag.name: at.tag_id for at in article.article_tags}

    # Получаем или создаем все новые теги
    new_tags = await process_tags(session, new_tag_names)
    new_tag_ids = {tag.name: tag.id for tag in new_tags}

    # Удаляем теги, которых нет в новом списке
    tags_to_remove = set(existing_tags.keys()) - set(new_tag_ids.keys())
    if tags_to_remove:
        tag_ids_to_remove = [existing_tags[name] for name in tags_to_remove]
        stmt = delete(ArticleTag).where(
            ArticleTag.article_id == article.id,
            ArticleTag.tag_id.in_(tag_ids_to_remove),
        )
        await session.execute(stmt)

    # Добавляем новые теги, которых еще нет у статьи
    tags_to_add = set(new_tag_ids.keys()) - set(existing_tags.keys())
    for tag_name in tags_to_add:
        tag_id = new_tag_ids[tag_name]
        article_tag = ArticleTag(article_id=article.id, tag_id=tag_id)
        session.add(article_tag)

    # Применяем изменения в сессии
    await session.flush()


async def delete_unused_tags(session: AsyncSession) -> int:
    """
    Delete tags that aren't associated with any articles.
    Returns the number of tags deleted.
    """
    # Находим неиспользуемые теги (без связанных статей)
    stmt = select(Tag).where(~Tag.article_tags.any())
    result = await session.execute(stmt)
    unused_tags = result.scalars().all()

    # Удаляем неиспользуемые теги
    count = 0
    for tag in unused_tags:
        await session.delete(tag)
        count += 1

    # Если были удаления, применяем изменения
    if count > 0:
        await session.flush()

    return count
