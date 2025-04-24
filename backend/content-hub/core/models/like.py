from sqlalchemy import ForeignKey 
from sqlalchemy.orm import Mapped, mapped_column, relationship
from .base import Base
from .mixins.timestamp_mixin import TimestampMixin

from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from .article import Article
    from .user import User


class Like(Base, TimestampMixin):
    """
    SQLAlchemy model representing a 'like' left by a user on an article.

    This model implements a many-to-many relationship between users and articles,
    where each like is uniquely identified by the combination of `user_id` and `article_id`.

    Attributes:
        article_id (int): Foreign key referencing the liked article.
        user_id (int): Foreign key referencing the user who liked the article.
        created_at (datetime): Timestamp of when the like was created (auto-generated).

    Relationships:
        article (Article): The article that was liked.
        user (User): The user who gave the like.

    Notes:
        - Composite primary key on (article_id, user_id) ensures a user can like
          an article only once.
        - Inherits from:
            - Base: SQLAlchemy declarative base.
            - TimestampMixin: Adds a `created_at` timestamp.

    Examples:
        new_like = Like(user_id=1, article_id=42)
    """

    article_id: Mapped[int] = mapped_column(ForeignKey("article.id"), primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("user.id"), primary_key=True)

    article: Mapped["Article"] = relationship("Article", back_populates="likes")
    user: Mapped["User"] = relationship("User", back_populates="likes")

    def __repr__(self) -> str:
        return (
            f"<Like(article_id={self.article_id}, user_id={self.user_id}, "
            f"created_at='{self.created_at}')>"
        )
