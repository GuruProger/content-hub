from sqlalchemy import DateTime, func
from sqlalchemy.orm import Mapped, mapped_column, declared_attr


class TimestampMixin:
	created_at: Mapped[DateTime] = mapped_column(DateTime, default=func.now(), nullable=False)

	@declared_attr
	def updated_at(cls) -> Mapped[DateTime | None]:
		# To include, specify include_updated_at = True in the child class
		if hasattr(cls, 'include_updated_at') and cls.include_updated_at:
			return mapped_column(DateTime, default=func.now(), onupdate=func.now(), nullable=False)
		return None
