from sqlalchemy.orm import Mapped, mapped_column


class RatingMixin:
	rating: Mapped[int] = mapped_column(default=0)
