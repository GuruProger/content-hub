from sqlalchemy import Boolean, ForeignKey, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship
from .base import Base
from .mixins.id_mixin import IDMixin
from .mixins.timestamp_mixin import TimestampMixin
from .mixins.rating_mixin import RatingMixin


class Article(IDMixin, TimestampMixin, RatingMixin, Base):
    """SQLAlchemy model representing an article.

    Combines common mixins with article-specific attributes like title, content,
    publication status, and relationship to the author.

    :param id: Auto-generated unique identifier
    :type id: int
    :param created_at: Timestamp of article creation (auto-generated)
    :type created_at: datetime
    :param updated_at: Timestamp of last update (auto-generated)
    :type updated_at: datetime
    :param rating: Article rating (likes count)
    :type rating: int
    :param title: Article title (up to 255 characters)
    :type title: str
    :param content: Full text of the article
    :type content: str
    :param user_id: Foreign key to users.id (author)
    :type user_id: int
    :param is_published: Publication status flag
    :type is_published: bool

    .. note::
       Inherits from:
       - ``IDMixin`` for primary key
       - ``TimestampMixin`` for creation and update timestamps
       - ``RatingMixin`` for rating system

    Example usage::

        new_article = Article(
            title="My First Article",
            content="This is the article content.",
            user_id=1,
            is_published=True
        )
    """

    title: Mapped[str] = mapped_column(String(255), nullable=False)
    content: Mapped[str] = mapped_column(Text, nullable=False)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"), nullable=False)
    is_published: Mapped[bool] = mapped_column(Boolean, nullable=False, default=False)

    author: Mapped["User"] = relationship("User", backref="articles")

    include_updated_at = True  # For TimestampMixin

    def __repr__(self) -> str:
        return (
            f"<Article(id={self.id}, title='{self.title}', user_id={self.user_id}, "
            f"is_published={self.is_published}, created_at='{self.created_at}', "
            f"rating={self.rating})>"
        )
