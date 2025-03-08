from dotenv import load_dotenv
import os
from pathlib import Path

from pydantic import BaseModel
from pydantic import PostgresDsn
from pydantic_settings import (
	BaseSettings,
)
from utils import generate_postgres_db_url

# Load environment variables from the .env file located in the backend directory
backend_path = Path(__file__).resolve().parent.parent.parent
load_dotenv(backend_path / ".env")


class RunConfig(BaseModel):
	"""Configuration for running the application"""
	host: str = "0.0.0.0"  # Default host to bind the application
	port: int = int(os.getenv("BACKEND_PORT"))  # Port to run the application, fetched from environment variables


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

class ApiV1Prefix(BaseModel):
	"""Configuration for API version 1 prefix"""
	prefix: str = "/v1"  # Prefix for API version 1 endpoints


class ApiPrefix(BaseModel):
	"""Configuration for the base API prefix"""
	prefix: str = "/api"  # Base prefix for all API endpoints
	v1: ApiV1Prefix = ApiV1Prefix()  # Nested configuration for API version 1


class Settings(BaseSettings):
	"""Main settings class"""
	run: RunConfig = RunConfig()  # Application run configuration
	api: ApiPrefix = ApiPrefix()  # API prefix configuration
	db: DatabaseConfig = DatabaseConfig()  # Database configuration


settings = Settings()
