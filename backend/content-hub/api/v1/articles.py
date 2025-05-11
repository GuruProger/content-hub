from typing import Annotated, Sequence, List, Optional
from datetime import datetime, date, timedelta

from fastapi import APIRouter, Depends, status, Query, HTTPException
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
    count: int = Query(
        description="Maximum number of articles", default=5, ge=1, le=20
    ),
    tags: List[str] = Query(default=None, description="Filter by tag names"),
    start_date: Optional[str] = Query(
        default=None,
        description="Filter articles created after this date (format: yyyy-mm-dd)",
        example=(date.today() - timedelta(days=365)).isoformat(),
    ),
    end_date: Optional[str] = Query(
        default=None,
        description="Filter articles created before this date (format: yyyy-mm-dd)",
        example=date.today().isoformat(),
    ),
    session: AsyncSession = Depends(db_helper.session_getter),
):
    """Get suggested articles with optional filtering by tags and date range."""

    # Parse dates from yyyy-mm-dd format to datetime objects
    parsed_start_date = None
    parsed_end_date = None

    if start_date:
        try:
            parsed_start_date = datetime.strptime(start_date, "%Y-%m-%d")
        except ValueError:
            raise HTTPException(
                status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
                detail="Invalid start_date format. Use yyyy-mm-dd (e.g., 2022-02-22)",
            )

    if end_date:
        try:
            # Set time to end of day to include the whole end_date
            parsed_end_date = datetime.strptime(
                end_date + " 23:59:59", "%Y-%m-%d %H:%M:%S"
            )
        except ValueError:
            raise HTTPException(
                status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
                detail="Invalid end_date format. Use yyyy-mm-dd (e.g., 2022-02-22)",
            )

    return await articles_crud.get_suggested_articles(
        session=session,
        count=count,
        tags=tags,
        start_date=parsed_start_date,
        end_date=parsed_end_date,
    )
