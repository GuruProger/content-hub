from datetime import datetime

from sqlalchemy import DateTime, func
from sqlalchemy.orm import Mapped, mapped_column, declared_attr

class TimestampMixin:
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), nullable=False)

    @declared_attr
    def updated_at(cls) -> Mapped[datetime | None]:
        if hasattr(cls, 'include_updated_at') and cls.include_updated_at:
            return mapped_column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)
        return None
