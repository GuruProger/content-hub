from sqlalchemy.orm import Mapped, mapped_column, declared_attr


class ContentMixin:
	@declared_attr
	def title(cls) -> Mapped[str]:
		# To include, specify include_title = True in the child class
		if hasattr(cls, 'include_title') and cls.include_title:
			return mapped_column(nullable=False)
		return None

	content: Mapped[str] = mapped_column(nullable=False)
