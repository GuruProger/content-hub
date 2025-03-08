from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import ForeignKey


class ArticleIDMixin:
	article_id: Mapped[int] = mapped_column(ForeignKey("articles.id"))
