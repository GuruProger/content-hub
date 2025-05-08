from datetime import datetime
from typing import ClassVar, Optional

from sqlalchemy import event, func, DateTime
from sqlalchemy.orm import Mapped, mapped_column, declared_attr


class TimestampMixin:
    """
    Mixin that adds created_at and optionally updated_at timestamp columns.

    created_at: Automatically set when object is created
    updated_at: Optionally updated when object is modified (only if include_updated_at = True)

    Child classes can enable updated_at tracking by setting include_updated_at = True
    """

    include_updated_at = False

    created_at: Mapped[datetime] = mapped_column(
        default=datetime.now,
        server_default=func.now(),
        nullable=False,
    )

    @declared_attr
    def updated_at(cls) -> Mapped[DateTime | None]:
        # To include, specify include_updated_at = True in the child class
        if hasattr(cls, "include_updated_at") and cls.include_updated_at:
            return mapped_column(
                DateTime,
                default=func.now(),
                server_default=func.now(),
                onupdate=func.now(),
                nullable=False,
            )
        return None
