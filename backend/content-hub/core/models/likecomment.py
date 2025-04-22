from datetime import datetime
from sqlalchemy import ForeignKey
from sqlalchemy.dialects.postgresql import TIMESTAMP
from sqlalchemy.orm import Mapped, mapped_column, relationship
from .base import Base
from .mixins.timestamp_mixin import TimestampMixin

from typing import TYPE_CHECKING
if TYPE_CHECKING:
    from .user import User


class LikeComment(Base, TimestampMixin):
    pass
