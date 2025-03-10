from pydantic import(
	BaseModel,
	PostgresDsn,
	field_validator,
	ValidationInfo,
)
from pydantic_settings import (
	BaseSettings,
)


class AppSettings(BaseModel):
	"""Configuration for running the application"""
	HOST: str = "0.0.0.0"
	POST: int = 8000


class PgSettings(BaseModel):
	POSTGRES_DRV: str
	POSTGRES_USER: str
	POSTGRES_PASSWORD: str
	POSTGRES_HOST: str
	POSTGRES_PORT: int
	POSTGRES_DB: str

	POSTGRES_URL: PostgresDsn

	@field_validator("POSTGRES_URL")
	def pgurl_validate(
		cls, v,
		values: ValidationInfo,
	) -> PostgresDsn:
		data = values.data
		return PostgresDsn.build(
			scheme=data.get("POSTGRES_DRV"),
			username=data.get("POSTGRES_USER"),
			password=data.get("POSTGRES_PASSWORD"),
			host=data.get("POSTGRES_HOST"),
			port=data.get("POSTGRES_PORT"),
			path=data.get("POSTGRES_DB")
		)


class DatabaseConfig(BaseModel):
	"""Configuration for the database connection"""
	url: PostgresDsn = generate_postgres_db_url()  # Generate the PostgreSQL database URL
	echo: bool = False  # Whether to log SQL queries (useful for debugging)
	echo_pool: bool = False  # Whether to log connection pool events
	max_overflow: int = 20  # Maximum number of connections to allow in the pool beyond the pool_size
	pool_size: int = 10  # Number of connections to keep in the pool
	naming_convention: dict[str, str] = {  # Naming conventions for database constraints and indexes
		"ix": "ix_%(column_0_label)s",
		"uq": "uq_%(table_name)s_%(column_0_N_name)s",
		"ck": "ck_%(table_name)s_%(constraint_name)s",
		"fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
		"pk": "pk_%(table_name)s",
	}


app_settings = AppSettings()
settings = Settings()
