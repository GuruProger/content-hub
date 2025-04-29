from sqlalchemy import ForeignKey, String
from sqlalchemy.orm import Mapped, mapped_column, relationship
from .base import Base
from .mixins.id_mixin import IDMixin

from typing import List, TYPE_CHECKING

if TYPE_CHECKING:
    from .article import Article


class Tag(IDMixin, Base):
    """
    SQLAlchemy model representing a tag.

    Attributes:
            id (int): Auto-generated unique identifier.
            name (str): Tag name (unique, up to 50 characters).
    """

    name: Mapped[str] = mapped_column(String(50), unique=True, nullable=False)
    article_tags: Mapped[List["ArticleTag"]] = relationship(
        "ArticleTag", back_populates="tag", cascade="all, delete-orphan"
    )

    def __repr__(self) -> str:
        return f"<Tag(id={self.id}, name='{self.name}')>"


class ArticleTag(Base):
    """
    Association table for many-to-many relationship between Article and Tag.

    Attributes:
            article_id (int): Foreign key to article.id.
            tag_id (int): Foreign key to tag.id.
    """

    article_id: Mapped[int] = mapped_column(ForeignKey("article.id"), primary_key=True)
    tag_id: Mapped[int] = mapped_column(ForeignKey("tag.id"), primary_key=True)

    article: Mapped["Article"] = relationship("Article", back_populates="article_tags")
    tag: Mapped["Tag"] = relationship("Tag", back_populates="article_tags")

    def __repr__(self) -> str:
        return f"<ArticleTag(article_id={self.article_id}, tag_id={self.tag_id})>"
