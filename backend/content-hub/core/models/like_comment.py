
from sqlalchemy import ForeignKey, DateTime, func
from sqlalchemy.dialects.postgresql import TIMESTAMP
from sqlalchemy.orm import Mapped, mapped_column, relationship
from .base import Base
from .mixins.timestamp_mixin import TimestampMixin

from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from .comment import Comment
    from .user import User


class LikeComment(Base, TimestampMixin):
    comment_id: Mapped[int] = mapped_column(
        ForeignKey("comment.id"),
        primary_key=True
    )
    user_id: Mapped[int] = mapped_column(
        ForeignKey("user.id"),
        primary_key=True
    )
    comment: Mapped["Comment"] = relationship("Comment", back_populates="like_comments")
    user: Mapped["User"] = relationship("User", back_populates="like_comments")

    def __repr__(self) -> str:
        return (
            f"<LikeComment(comment_id={self.comment_id}, user_id={self.user_id}, "
            f"created_at='{self.created_at}')>"
        )
