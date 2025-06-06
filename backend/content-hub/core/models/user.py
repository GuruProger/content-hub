from enum import Enum
from typing import List

from sqlalchemy import Integer, Boolean, String, Text
from sqlalchemy import Enum as SQLEnum, LargeBinary
from sqlalchemy.orm import Mapped, mapped_column, relationship

from .base import Base
from .mixins.id_mixin import IDMixin
from .mixins.timestamp_mixin import TimestampMixin

from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from .like_article import LikeArticle
    from .article import Article
    from .comment import Comment
    from .like_comment import LikeComment


class AccountStatus(Enum):
    ACTIVE = "active"
    DELETED = "deleted"
    BANNED = "banned"


class User(IDMixin, TimestampMixin, Base):
    """
    SQLAlchemy model representing a system user.

    Combines common mixins with user-specific attributes and authentication fields.

    Attributes:
        id (int): Auto-generated unique identifier.
        created_at (datetime): Timestamp of user creation (auto-generated).
        rating (int): User reputation score starting at 0.
        username (str): Unique username (3-50 characters).
        email (str): Unique email address.
        password (bytes): Hashed password string.
        is_admin (bool): Administrator privileges flag (default False).
        avatar (bytes | None): Optional profile image as binary data.
        bio (str | None): Optional user description.
        status (AccountStatus): Current account state (active/deleted/banned).


    Raises:
        ValueError: If username/email constraints are violated.
        sqlalchemy.exc.IntegrityError: On duplicate username/email.

    Notes:
        Inherits from:
        - IDMixin for primary key.
        - TimestampMixin for creation time.

    Examples:
        new_user = User(
            username='johndoe',
            email='john@example.com',
            password=b'$2b$12$WBoinIr3N0xYfFmB0.t4lOg87VS7Xu7xQhVSgJYo94z.uLEJdThZ2',
            bio='Software developer'
        )
    """

    username: Mapped[str] = mapped_column(String(50), unique=True, nullable=False)
    email: Mapped[str] = mapped_column(String(50), unique=True, nullable=False)
    password: Mapped[bytes] = mapped_column(LargeBinary(60), nullable=False)

    rating: Mapped[int] = mapped_column(Integer, default=0)
    is_admin: Mapped[bool] = mapped_column(Boolean, nullable=False, default=False)
    avatar: Mapped[bytes] = mapped_column(LargeBinary, nullable=True)
    bio: Mapped[str] = mapped_column(Text, nullable=True)

    status: Mapped[AccountStatus] = mapped_column(
        SQLEnum(AccountStatus, name="account_status"),
        default=AccountStatus.ACTIVE,
        nullable=False,
    )

    articles: Mapped[List["Article"]] = relationship(
        "Article", back_populates="author", cascade="all, delete-orphan"
    )
    like_articles: Mapped[List["LikeArticle"]] = relationship(
        "LikeArticle", back_populates="user", cascade="all, delete-orphan"
    )
    comments: Mapped[List["Comment"]] = relationship(
        "Comment", back_populates="user", cascade="all, delete-orphan"
    )
    like_comments: Mapped[List["LikeComment"]] = relationship(
        "LikeComment", back_populates="user", cascade="all, delete-orphan"
    )

    def __repr__(self) -> str:
        return (
            f"<User(id={self.id}, username='{self.username}',"
            f" email='{self.email}', created_at='{self.created_at}',"
            f"is_admin='{self.is_admin}', rating={self.rating}, status='{self.status}')>"
        )
