from enum import Enum
from sqlalchemy import Enum as SQLEnum
from sqlalchemy import String, Text
from sqlalchemy.orm import Mapped, mapped_column
from .base import Base

from .mixins.id_mixin import IDMixin
from .mixins.timestamp_mixin import TimestampMixin
from .mixins.rating_mixin import RatingMixin


class UserRole(Enum):
    USER = "user"
    ADMIN = "admin"


class User(IDMixin, TimestampMixin, RatingMixin, Base):
    """SQLAlchemy model representing a system user.

    Combines common mixins with user-specific attributes and authentication fields.

    :param id: Auto-generated unique identifier
    :type id: int
    :param created_at: Timestamp of user creation (auto-generated)
    :type created_at: datetime
    :param rating: User reputation score starting at 0
    :type rating: int
    :param username: Unique username (3-50 characters)
    :type username: str
    :param email: Unique email address
    :type email: str
    :param password_hash: Hashed password string
    :type password_hash: str
    :param role: User access level, defaults to UserRole.USER
    :type role: UserRole
    :param avatar_url: Optional profile image URL
    :type avatar_url: str | None
    :param bio: Optional user description
    :type bio: str | None

    :raises ValueError: If username/email constraints are violated
    :raises sqlalchemy.exc.IntegrityError: On duplicate username/email

    .. note::
       Inherits from:
       - ``IDMixin`` for primary key
       - ``TimestampMixin`` for creation time
       - ``RatingMixin`` for reputation system

    Example usage::

        new_user = User(
            username="johndoe",
            email="john@example.com",
            password_hash=hashed_password,
            role=UserRole.USER
        )
    """

    username: Mapped[str] = mapped_column(String(50), unique=True, nullable=False)
    email: Mapped[str] = mapped_column(String(100), unique=True, nullable=False)
    password_hash: Mapped[str] = mapped_column(String(255), nullable=False)

    role: Mapped[UserRole] = mapped_column(
        SQLEnum(UserRole, name="user_role"), nullable=False, default=UserRole.USER
    )
    avatar_url: Mapped[str] = mapped_column(String(255), nullable=True)
    bio: Mapped[str] = mapped_column(Text, nullable=True)

    def __repr__(self) -> str:
        return (
            f"<User(id={self.id}, username='{self.username}', email='{self.email}', "
            f"role='{self.role}', created_at='{self.created_at}', rating={self.rating})>"
        )


new_user = User(
    username="johndoe",
    email="john@example.com",
    password_hash="hashed_password",
    role=UserRole.USER,
)
