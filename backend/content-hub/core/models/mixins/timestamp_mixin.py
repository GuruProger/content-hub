from datetime import datetime
from typing import ClassVar

from sqlalchemy import event
from sqlalchemy.orm import Mapped, mapped_column, DeclarativeBase


class TimestampMixin:
    """
    Mixin that adds created_at and updated_at timestamp columns.

    created_at: Automatically set when object is created
    updated_at: Automatically updated when object is modified

    Child classes can disable updated_at tracking by setting _include_updated_at = False
    """

    created_at: Mapped[datetime] = mapped_column(
        default=datetime.utcnow, nullable=False
    )
    updated_at: Mapped[datetime] = mapped_column(
        default=datetime.utcnow, onupdate=datetime.utcnow, nullable=False
    )

    # Flag to control whether updated_at should be included
    _include_updated_at: ClassVar[bool] = True


@event.listens_for(TimestampMixin, "before_update", propagate=True)
def timestamp_before_update(mapper, connection, target):
    """
    Event listener to ensure updated_at is set properly during updates.
    This ensures that the update timestamp is set even during bulk operations
    or when using mechanisms that bypass SQLAlchemy's standard attribute tracking.

    Only updates if the _include_updated_at class attribute is True.
    """
    if getattr(target, "_include_updated_at", True):
        target.updated_at = datetime.utcnow()
