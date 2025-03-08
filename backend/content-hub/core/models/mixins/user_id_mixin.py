from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import ForeignKey


class UserIDMixin:
	user_id: Mapped[int] = mapped_column(ForeignKey("users.id"))
