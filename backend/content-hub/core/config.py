from dotenv import load_dotenv
import os
from pathlib import Path

from pydantic import BaseModel
from pydantic import PostgresDsn
from pydantic_settings import (
	BaseSettings,
)
from utils import generate_postgres_db_url

# Load environment variables from .env file
backend_path = Path(__file__).resolve().parent.parent.parent
load_dotenv(backend_path / ".env")


class RunConfig(BaseModel):
	host: str = "0.0.0.0"
	port: int = int(os.getenv("BACKEND_PORT"))


class DatabaseConfig(BaseModel):
	url: PostgresDsn = generate_postgres_db_url()
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
