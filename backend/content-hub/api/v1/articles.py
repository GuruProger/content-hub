from typing import Annotated, Type, Sequence

from fastapi import APIRouter, Depends, status, Query
from sqlalchemy.ext.asyncio import AsyncSession

from core.models import Article, db_helper
from core.schemas.article import (
    ArticleCreateSchema,
    ArticleReadSchema,
    ArticleUpdateSchema,
    ArticlePreviewSchema,
)
from crud import articles as articles_crud

router = APIRouter(tags=["Articles"])


@router.post("/", response_model=ArticleReadSchema, status_code=status.HTTP_201_CREATED)
async def create_article_endpoint(
    session: Annotated[AsyncSession, Depends(db_helper.session_getter)],
    article_create: ArticleCreateSchema,
) -> Article:
    article = await articles_crud.create_article(
        session=session,
        article_create=article_create,
    )
    return article


@router.get("/{article_id}", response_model=ArticleReadSchema)
async def get_article_endpoint(
    article_id: int,
    session: Annotated[AsyncSession, Depends(db_helper.session_getter)],
) -> Article:
    article = await articles_crud.get_article(
        session=session,
        article_id=article_id,
    )
    return article


@router.get("/user/{user_id}", response_model=Sequence[ArticlePreviewSchema])
async def get_user_articles_endpoint(
    user_id: int,
    session: Annotated[AsyncSession, Depends(db_helper.session_getter)],
) -> Sequence[Article]:
    articles = await articles_crud.get_user_articles(
        session=session,
        user_id=user_id,
    )
    return articles


@router.patch("/{article_id}", response_model=ArticleReadSchema)
async def update_article_endpoint(
    article_id: int,
    article_update: ArticleUpdateSchema,
    session: Annotated[AsyncSession, Depends(db_helper.session_getter)],
) -> Article:
    article = await articles_crud.update_article(
        session=session,
        article_id=article_id,
        article_update=article_update,
    )
    return article


@router.delete("/{article_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_article_endpoint(
    article_id: int,
    session: Annotated[AsyncSession, Depends(db_helper.session_getter)],
) -> None:
    await articles_crud.delete_article(
        session=session,
        article_id=article_id,
    )


@router.get("/suggested/", response_model=Sequence[ArticlePreviewSchema])
async def get_suggested_articles_endpoint(
    count: int = Query(default=5, ge=1, le=20),
    session: AsyncSession = Depends(db_helper.session_getter),
):
    return await articles_crud.get_suggested_articles(session, count)
