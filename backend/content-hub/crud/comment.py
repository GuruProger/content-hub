from fastapi import HTTPException, status
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from core.models.comment import Comment


class CommentManager:
    def __init__(self, db_session: AsyncSession):
        self.db_session = db_session

    async def get_comment(self, comment_id: int) -> Comment | None:
        query = select(Comment).filter(Comment.id == comment_id)
        result = await self.db_session.execute(query)
        return result.scalar()

    async def create_comment(
        self, content: str, article_id: int, user_id: int
    ) -> Comment:
        new_comment = Comment(
            content=content,
            article_id=article_id,
            user_id=user_id,
        )
        self.db_session.add(new_comment)
        await self.db_session.commit()
        await self.db_session.refresh(new_comment)
        return new_comment

    async def update_comment(self, comment_id: int, new_content: str) -> Comment:
        comment = await self.get_comment(comment_id)
        if not comment:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND, detail="Comment not found"
            )
        comment.content = new_content
        await self.db_session.commit()
        await self.db_session.refresh(comment)
        return comment

    async def delete_comment(self, comment_id: int) -> None:
        comment = await self.get_comment(comment_id)
        if comment:
            await self.db_session.delete(comment)
            await self.db_session.commit()

    async def list_comments_by_article(self, article_id: int) -> list[Comment]:
        query = select(Comment).filter(Comment.article_id == article_id)
        result = await self.db_session.execute(query)
        return list(result.scalars().all())

    async def list_comments_by_user(self, user_id: int) -> list[Comment]:
        query = select(Comment).filter(Comment.user_id == user_id)
        result = await self.db_session.execute(query)
        return list(result.scalars().all())
