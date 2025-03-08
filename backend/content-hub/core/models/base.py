from sqlalchemy import MetaData
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, declared_attr

from core.config import settings
from utils import camel_to_snake


class Base(DeclarativeBase):
	"""Base class for all database models"""

	__abstract__ = True  # This class will not create a table in the database

	metadata = MetaData(
		naming_convention=settings.db.naming_convention,
	)

	@declared_attr.directive
	def __tablename__(cls) -> str:  # Auto-generation of the table name based on the class name
		return camel_to_snake(cls.__name__) + "s"
