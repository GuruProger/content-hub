from dotenv import load_dotenv
import os
from pathlib import Path

from pydantic import BaseModel
from pydantic import PostgresDsn
from pydantic_settings import (
	BaseSettings,
)

# Load environment variables from .env file
backend_path = Path(__file__).resolve().parent.parent.parent
load_dotenv(backend_path / ".env")

# Define a dictionary to store database configuration
db_config = {
	'user': os.getenv('POSTGRES_USER'),
	'password': os.getenv('POSTGRES_PASSWORD'),
	'host': os.getenv('POSTGRES_HOST'),
	'port': os.getenv('POSTGRES_PORT'),
	'db': os.getenv('POSTGRES_DB')
}


class RunConfig(BaseModel):
	host: str = "0.0.0.0"
	port: int = int(os.getenv("BACKEND_PORT"))


class DatabaseConfig(BaseModel):
	url: PostgresDsn = \
		(
			f"postgresql+asyncpg://{db_config['user']}:"
			f"{db_config['password']}@{db_config['host']}:"
			f"{db_config['port']}/{db_config['db']}"
		)  # The connection URL for the PostgreSQL database
	echo: bool = False
	echo_pool: bool = False
	max_overflow: int = 20
	pool_size: int = 10


class ApiV1Prefix(BaseModel):
	prefix: str = "/v1"


class ApiPrefix(BaseModel):
	prefix: str = "/api"
	v1: ApiV1Prefix = ApiV1Prefix()


class Settings(BaseSettings):
	run: RunConfig = RunConfig()
	api: ApiPrefix = ApiPrefix()
	db: DatabaseConfig = DatabaseConfig()


settings = Settings()
