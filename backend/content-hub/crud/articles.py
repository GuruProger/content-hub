from typing import Type, Sequence

from sqlalchemy import select
from fastapi import HTTPException, status
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.ext.asyncio import AsyncSession

from core.models import Article
from core.schemas.article import ArticleCreateSchema, ArticleUpdateSchema


async def create_article(
    session: AsyncSession,
    article_create: ArticleCreateSchema,
) -> Article:
    """
    Create a new article in the database.

    :param session: AsyncSession for database interaction
    :param article_create: Article creation data (including user_id)
    :return: The created article
    """
    try:
        article_data = article_create.model_dump()
        article = Article(**article_data)

        session.add(article)
        await session.commit()
        await session.refresh(article)

        return article

    except SQLAlchemyError:
        await session.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Database error",
        )


async def get_article(
    session: AsyncSession,
    article_id: int,
) -> Type[Article]:
    """
    Retrieve an article by its ID.

    :param session: AsyncSession for database interaction
    :param article_id: The ID of the article to retrieve
    :return: The retrieved article
    """
    try:
        article = await session.get(Article, article_id)
        if article is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Article not found",
            )
        return article
    except SQLAlchemyError:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Database error",
        )


async def get_user_articles(
    session: AsyncSession,
    user_id: int,
) -> Sequence[Article]:
    """
    Retrieve all articles for a specific user by user_id.

    :param session: AsyncSession for database interaction
    :param user_id: ID of the user whose articles we want to retrieve
    :return: List of articles belonging to the user
    """
    try:
        result = await session.execute(
            select(Article).where(Article.user_id == user_id)
        )
        articles = result.scalars().all()

        if articles is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="No articles found for this user",
            )

        return articles

    except SQLAlchemyError:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Database error",
        )


async def update_article(
    session: AsyncSession,
    article_id: int,
    article_update: ArticleUpdateSchema,
) -> Type[Article]:
    """
    Update an existing article's data.

    :param session: AsyncSession for database interaction
    :param article_id: The ID of the article to update
    :param article_update: The data to update the article with
    :return: The updated article
    """
    try:
        article = await session.get(Article, article_id)
        if article is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Article not found",
            )

        update_data = article_update.model_dump(exclude_unset=True)

        for field, value in update_data.items():
            setattr(article, field, value)

        await session.commit()
        await session.refresh(article)
        return article

    except SQLAlchemyError:
        await session.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Database error",
        )


async def delete_article(
    session: AsyncSession,
    article_id: int,
) -> None:
    """
    Delete an article by its ID.

    :param session: AsyncSession for database interaction
    :param article_id: The ID of the article to delete
    :return: None
    """
    try:
        article = await session.get(Article, article_id)
        if article is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Article not found",
            )

        await session.delete(article)
        await session.commit()

    except SQLAlchemyError:
        await session.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Database error",
        )
