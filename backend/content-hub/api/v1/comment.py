from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from core.models import db_helper
from core.schemas.comment import CommentCreate, CommentOut, CommentUpdate
from crud.comment import CommentManager

router = APIRouter(tags=["Comments"])

@router.get("/{comment_id:int}", response_model=CommentOut)
async def get_comment_endpoint(
    comment_id: int,
    db: AsyncSession = Depends(db_helper.session_getter)
):
    manager = CommentManager(db)
    comment = await manager.get_comment(comment_id)
    if not comment:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Comment not found"
        )
    return comment


@router.post("/", response_model=CommentOut, status_code=status.HTTP_201_CREATED)
async def create_comment_endpoint(
    comment_in: CommentCreate,
    db: AsyncSession = Depends(db_helper.session_getter)
):
    manager = CommentManager(db)
    comment = await manager.create_comment(
        content=comment_in.content,
        article_id=comment_in.article_id,
        user_id=comment_in.user_id
    )
    return comment


@router.put("/{comment_id:int}", response_model=CommentOut)
async def update_comment_endpoint(
    comment_id: int,
    comment_update: CommentUpdate,
    db: AsyncSession = Depends(db_helper.session_getter)
):
    manager = CommentManager(db)
    existing_comment = await manager.get_comment(comment_id)
    if not existing_comment:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Comment not found"
        )
    updated_comment = await manager.update_comment(comment_id, comment_update.content)
    return updated_comment


@router.delete("/{comment_id:int}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_comment_endpoint(
    comment_id: int,
    db: AsyncSession = Depends(db_helper.session_getter)
):
    manager = CommentManager(db)
    existing_comment = await manager.get_comment(comment_id)
    if not existing_comment:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Comment not found"
        )
    await manager.delete_comment(comment_id)


@router.get("/article/{article_id:int}", response_model=list[CommentOut])
async def list_comments_by_article_endpoint(
    article_id: int,
    db: AsyncSession = Depends(db_helper.session_getter)
):
    manager = CommentManager(db)
    comments = await manager.list_comments_by_article(article_id)
    return comments


@router.get("/user/{user_id:int}", response_model=list[CommentOut])
async def list_comments_by_user_endpoint(
    user_id: int,
    db: AsyncSession = Depends(db_helper.session_getter)
):
    manager = CommentManager(db)
    comments = await manager.list_comments_by_user(user_id)
    return comments
