from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from datetime import datetime, timezone
from core.models.like_article import LikeArticle

class LikeManager:
    def __init__(self, db_session: AsyncSession):
        self.db_session = db_session

    async def get_like(self, article_id: int, user_id: int) -> LikeArticle | None:
        query = select(LikeArticle).filter(
            LikeArticle.article_id == article_id,
            LikeArticle.user_id == user_id
        )
        result = await self.db_session.execute(query)
        return result.scalar()

    async def create_like(self, article_id: int, user_id: int) -> LikeArticle:
        new_like = LikeArticle(
            article_id=article_id,
            user_id=user_id,
            created_at=datetime.now(timezone.utc)
        )
        self.db_session.add(new_like)
        await self.db_session.commit()
        await self.db_session.refresh(new_like)
        return new_like

    async def delete_like(self, article_id: int, user_id: int) -> None:
        like = await self.get_like(article_id, user_id)
        if like:
            await self.db_session.delete(like)
            await self.db_session.commit()

    async def list_likes_by_article(self, article_id: int) -> list[LikeArticle]:
        query = select(LikeArticle).filter(LikeArticle.article_id == article_id)
        result = await self.db_session.execute(query)
        return list(result.scalars().all())

    async def list_likes_by_user(self, user_id: int) -> list[LikeArticle]:
        query = select(LikeArticle).filter(LikeArticle.user_id == user_id)
        result = await self.db_session.execute(query)
        return list(result.scalars().all())
