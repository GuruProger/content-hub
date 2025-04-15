from datetime import datetime
from sqlalchemy import ForeignKey, DateTime, func
from sqlalchemy.dialects.postgresql import TIMESTAMP
from sqlalchemy.orm import Mapped, mapped_column, relationship
from .base import Base
from .mixins.timestamp_mixin import TimestampMixin

from typing import TYPE_CHECKING
if TYPE_CHECKING:
    from .article import Article
    from .user import User


class Like(Base, TimestampMixin):

    article_id: Mapped[int] = mapped_column(
        ForeignKey("articles.id"),
        primary_key=True
    )
    user_id: Mapped[int] = mapped_column(
        ForeignKey("users.id"),
        primary_key=True
    )
    article: Mapped["Article"] = relationship("Article", back_populates="likes")
    user: Mapped["User"] = relationship("User", back_populates="likes")

    def __repr__(self) -> str:
        return (
            f"<Like(article_id={self.article_id}, user_id={self.user_id}, "
            f"created_at='{self.created_at}')>"
        )
