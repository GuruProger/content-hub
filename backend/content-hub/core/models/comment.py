from sqlalchemy import ForeignKey, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from .base import Base
from .mixins.timestamp_mixin import TimestampMixin

from typing import TYPE_CHECKING
if TYPE_CHECKING:
    from .article import Article
    from .user import User


class Comment(Base, TimestampMixin):

    id: Mapped[int] = mapped_column(primary_key=True)
    content: Mapped[str] = mapped_column(Text, nullable=False)
    article_id: Mapped[int] = mapped_column(ForeignKey("article.id"), nullable=False)
    user_id: Mapped[int] = mapped_column(ForeignKey("user.id"), nullable=False)

    article: Mapped["Article"] = relationship("Article", back_populates="comments")
    user: Mapped["User"] = relationship("User", back_populates="comments")


    def __repr__(self) -> str:
        return (
            f"<Comment(id={self.id}, article_id={self.article_id}, "
            f"user_id={self.user_id}, created_at='{self.created_at}')>"
        )
