from datetime import datetime, timezone
from sqlalchemy import DateTime, func
from sqlalchemy.orm import Mapped, mapped_column, declared_attr

class TimestampMixin:
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc),
        server_default=func.now(),
        nullable=False,
    )

    @declared_attr
    def updated_at(cls) -> Mapped[datetime | None]:
        if getattr(cls, "include_updated_at", False):
            return mapped_column(
                DateTime(timezone=True),
                default=lambda: datetime.now(timezone.utc),
                server_default=func.now(),
                onupdate=lambda: datetime.now(timezone.utc),
                nullable=False,
            )
        return None
