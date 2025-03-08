from enum import Enum
from sqlalchemy import Enum as SQLEnum
from sqlalchemy import String, Text
from sqlalchemy.orm import Mapped, mapped_column
from .base import Base

from .mixins.id_mixin import IDMixin
from .mixins.timestamp_mixin import TimestampMixin
from .mixins.rating_mixin import RatingMixin


class UserRole(Enum):
	USER = 'user'
	ADMIN = 'admin'


class User(IDMixin, TimestampMixin, RatingMixin, Base):
	username: Mapped[str] = mapped_column(String(50), unique=True, nullable=False)
	email: Mapped[str] = mapped_column(String(100), unique=True, nullable=False)
	password_hash: Mapped[str] = mapped_column(String(255), nullable=False)

	role: Mapped[UserRole] = mapped_column(SQLEnum(UserRole, name="user_role"), nullable=False, default=UserRole.USER)
	avatar_url: Mapped[str] = mapped_column(String(255), nullable=True)
	bio: Mapped[str] = mapped_column(Text, nullable=True)

	def __repr__(self) -> str:
		return (
			f"<User(id={self.id}, username='{self.username}', email='{self.email}', "
			f"role='{self.role}', created_at='{self.created_at}', rating={self.rating})>"
		)
