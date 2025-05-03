from sqlalchemy import Boolean, ForeignKey, String, Text, Float
from sqlalchemy.orm import Mapped, mapped_column, relationship

from .base import Base
from .mixins.id_mixin import IDMixin
from .mixins.timestamp_mixin import TimestampMixin

from typing import TYPE_CHECKING, List

if TYPE_CHECKING:
    from .like_article import LikeArticle
    from .user import User
    from .tag import Tag, ArticleTag
    from .comment import Comment


class Article(IDMixin, TimestampMixin, Base):
    """
    SQLAlchemy model representing an article.

    Combines common mixins with article-specific attributes like title, content,
    publication status, and relationship to the author.

    Attributes:
            id (int): Auto-generated unique identifier.
            created_at (datetime): Timestamp of article creation (auto-generated).
            updated_at (datetime): Timestamp of last update (auto-generated).
            rating (float): Article rating starting at 0.
            title (str): Article title (up to 255 characters).
            content (str): Full text of the article.
            user_id (int): Foreign key to user.id (author).
            is_published (bool): Publication status flag.

    Raises:
            ValueError: If any constraint violations occur.
            sqlalchemy.exc.IntegrityError: On foreign key constraint failures.

    Notes:
            Inherits from:
            - IDMixin for primary key.
            - TimestampMixin for creation and update timestamps.

    Examples:
            Creating a new article instance:

            ```python
            new_article = Article(
                    title="My First Article",
                    content="This is the article content.",
                    user_id=1,
                    is_published=True
            )
            ```
    """

    title: Mapped[str] = mapped_column(String(255), nullable=False)
    content: Mapped[str] = mapped_column(Text, nullable=False)
    rating: Mapped[float] = mapped_column(Float(precision=2), default=0.0)
    user_id: Mapped[int] = mapped_column(ForeignKey("user.id"), nullable=False)
    is_published: Mapped[bool] = mapped_column(Boolean, nullable=False, default=False)

    author: Mapped["User"] = relationship("User", back_populates="articles")
    like_articles: Mapped[List["LikeArticle"]] = relationship(
        "LikeArticle", back_populates="article", cascade="all, delete-orphan"
    )
    article_tags: Mapped[List["ArticleTag"]] = relationship(
        "ArticleTag", back_populates="article", cascade="all, delete-orphan"
    )
    comments: Mapped[List["Comment"]] = relationship(
        "Comment", back_populates="article", cascade="all, delete-orphan"
    )

    include_updated_at = True  # For TimestampMixin

    @property
    def tags(self) -> list["Tag"]:
        return [at.tag for at in self.article_tags]

    def __repr__(self) -> str:
        return (
            f"<Article(id={self.id}, title='{self.title}', user_id={self.user_id}, "
            f"is_published={self.is_published}, created_at='{self.created_at}', "
            f"rating={self.rating}>"
        )
