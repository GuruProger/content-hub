from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from core.models import db_helper, User
from core.schemas.like_comment import LikeCommentOut, LikeCommentBase, LikeCommentCreate
from crud.like_comment import LikeCommentManager
from api.auth.auth_config import get_current_auth_user


router = APIRouter(tags=["LikeComments"])


@router.get("/{comment_id:int}/{user_id:int}", response_model=LikeCommentOut)
async def get_like_endpoint(
    comment_id: int,
    user_id: int,
    db: AsyncSession = Depends(db_helper.session_getter)
):
    manager = LikeCommentManager(db)
    like = await manager.get_like(comment_id, user_id)
    if not like:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Like not found"
        )
    return like


@router.post("/", response_model=LikeCommentBase, status_code=status.HTTP_201_CREATED)
async def create_like_endpoint(
    like_in: LikeCommentCreate,
    db: AsyncSession = Depends(db_helper.session_getter),
    current_user: User = Depends(get_current_auth_user)
):
    if like_in.user_id != current_user.id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="No access."
        )
    manager = LikeCommentManager(db)
    existing_like = await manager.get_like(like_in.comment_id, like_in.user_id)
    if existing_like:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Like already exists"
        )
    like = await manager.create_like(like_in.comment_id, like_in.user_id)
    return like


@router.delete("/{comment_id:int}/{user_id:int}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_like_endpoint(
    comment_id: int,
    user_id: int,
    db: AsyncSession = Depends(db_helper.session_getter),
    current_user: User = Depends(get_current_auth_user)
):
    manager = LikeCommentManager(db)
    existing_like = await manager.get_like(comment_id, user_id)
    if not existing_like:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Like not found"
        )
    if user_id != current_user.id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="No access."
        )
    await manager.delete_like(comment_id, user_id)
    return None


@router.get("/comment/{comment_id:int}", response_model=list[LikeCommentOut])
async def list_likes_by_comment_endpoint(
    comment_id: int,
    db: AsyncSession = Depends(db_helper.session_getter)
):
    manager = LikeCommentManager(db)
    likes = await manager.list_likes_by_comment(comment_id)
    return likes


@router.get("/user/{user_id:int}", response_model=list[LikeCommentOut])
async def list_likes_by_user_endpoint(
    user_id: int,
    db: AsyncSession = Depends(db_helper.session_getter)
):
    manager = LikeCommentManager(db)
    likes = await manager.list_likes_by_user(user_id)
    return likes
