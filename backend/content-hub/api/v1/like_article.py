from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from core.models import db_helper, User
from core.schemas.like_article import LikeCreate, LikeOut
from crud.like_article import LikeManager
from api.auth.auth_config import get_current_auth_user


router = APIRouter(tags=["Likearticles"])


@router.get("/{article_id:int}/{user_id:int}", response_model=LikeOut)
async def get_like_endpoint(
    article_id: int, user_id: int, db: AsyncSession = Depends(db_helper.session_getter)
):
    manager = LikeManager(db)
    like = await manager.get_like(article_id, user_id)
    if not like:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Like not found"
        )
    return like


@router.post("/", response_model=LikeOut, status_code=status.HTTP_201_CREATED)
async def create_like_endpoint(
    like_in: LikeCreate,
    db: AsyncSession = Depends(db_helper.session_getter),
    current_user: User = Depends(get_current_auth_user)
):
    manager = LikeManager(db)
    if current_user.id != like_in.user_id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="No access."
        )
    existing_like = await manager.get_like(like_in.article_id, like_in.user_id)
    if existing_like:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="Like already exists"
        )
    like = await manager.create_like(like_in.article_id, like_in.user_id)
    return like


@router.delete(
    "/{article_id:int}/{user_id:int}", status_code=status.HTTP_204_NO_CONTENT
)
async def delete_like_endpoint(
    article_id: int, user_id: int,
    db: AsyncSession = Depends(db_helper.session_getter),
    current_user: User = Depends(get_current_auth_user)
):
    manager = LikeManager(db)
    manager = LikeManager(db)
    if current_user.id != user_id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="No access."
        )
    existing_like = await manager.get_like(article_id, user_id)
    if not existing_like:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Like not found"
        )
    await manager.delete_like(article_id, user_id)
    return None


@router.get("/article/{article_id:int}", response_model=list[LikeOut])
async def list_likes_by_article_endpoint(
    article_id: int, db: AsyncSession = Depends(db_helper.session_getter)
):
    manager = LikeManager(db)
    likes = await manager.list_likes_by_article(article_id)
    return likes


@router.get("/user/{user_id:int}", response_model=list[LikeOut])
async def list_likes_by_user_endpoint(
    user_id: int, db: AsyncSession = Depends(db_helper.session_getter)
):
    manager = LikeManager(db)
    likes = await manager.list_likes_by_user(user_id)
    return likes
