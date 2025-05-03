from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from datetime import datetime, timezone
from core.models.like_comment import LikeComment

class LikeCommentManager:
    def __init__(self, db_session: AsyncSession):
        self.db_session = db_session

    async def get_like(self, comment_id: int, user_id: int) -> LikeComment | None:
        query = select(LikeComment).filter(
            LikeComment.comment_id == comment_id,
            LikeComment.user_id == user_id
        )
        result = await self.db_session.execute(query)
        return result.scalar()

    async def create_like(self, comment_id: int, user_id: int) -> LikeComment:
        new_like = LikeComment(
            comment_id=comment_id,
            user_id=user_id,
        )
        self.db_session.add(new_like)
        await self.db_session.commit()
        await self.db_session.refresh(new_like)
        return new_like

    async def delete_like(self, comment_id: int, user_id: int) -> None:
        like = await self.get_like(comment_id, user_id)
        if like:
            await self.db_session.delete(like)
            await self.db_session.commit()

    async def list_likes_by_comment(self, comment_id: int) -> list[LikeComment]:
        query = select(LikeComment).filter(LikeComment.comment_id == comment_id)
        result = await self.db_session.execute(query)
        return list(result.scalars().all())

    async def list_likes_by_user(self, user_id: int) -> list[LikeComment]:
        query = select(LikeComment).filter(LikeComment.user_id == user_id)
        result = await self.db_session.execute(query)
        return list(result.scalars().all())
