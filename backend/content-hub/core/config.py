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
BASE_DIR = Path(__file__).resolve().parent.parent
backend_path = Path(__file__).resolve().parent.parent.parent
env_path = backend_path / ".env"

if not env_path.is_file():  # `.env` is not exists
    raise FileNotFoundError(
        f"Critical Error: .env file not found at {env_path}\n"
        "Please create it or check the path."
    )
if env_path.stat().st_size == 0:  # env is empty
    raise ValueError(
        f"Critical Error: .env file is empty at {env_path}\n"
        "Please fill it with required environment variables."
    )

load_dotenv(env_path)


class RunConfig(BaseModel):
    """Configuration for running the application"""

    host: str = "0.0.0.0"  # Default host to bind the application
    port: int = int(
        os.getenv("BACKEND_PORT")
    )  # Port to run the application, fetched from environment variables


class DatabaseConfig(BaseModel):
    """Configuration for the database connection"""

    url: PostgresDsn = (
        generate_postgres_db_url()
    )  # Generate the PostgreSQL database URL
    test_url: PostgresDsn = generate_postgres_db_url(test=True)
    echo: bool = False  # Whether to log SQL queries (useful for debugging)
    echo_pool: bool = False  # Whether to log connection pool events
    max_overflow: int = (
        20  # Maximum number of connections to allow in the pool beyond the pool_size
    )
    pool_size: int = 10  # Number of connections to keep in the pool
    naming_convention: dict[str, str] = (
        {  # Naming conventions for database constraints and indexes
            "ix": "ix_%(column_0_label)s",
            "uq": "uq_%(table_name)s_%(column_0_N_name)s",
            "ck": "ck_%(table_name)s_%(constraint_name)s",
            "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
            "pk": "pk_%(table_name)s",
        }
    )


class ApiV1Prefix(BaseModel):
    """Configuration for API version 1 prefix"""

    prefix: str = "/v1"  # Prefix for API version 1 endpoints

    # Prefixes for users endpoints
    users: str = "/users"
    articles: str = "/articles"
    like_articles: str = "/like_articles"
    comments: str = "/comments"


class ApiPrefix(BaseModel):
    """Configuration for the base API prefix"""

    prefix: str = "/api"  # Base prefix for all API endpoints
    v1: ApiV1Prefix = ApiV1Prefix()  # Nested configuration for API version 1


class AuthJWT(BaseModel):
    private_key_path: Path = BASE_DIR / "keys" / "jwt-private.pem"
    public_key_path: Path = BASE_DIR / "keys" / "jwt-public.pem"
    algorithm: str = "RS256"
    access_token_expire_minutes: int = 10


class Settings(BaseSettings):
    """Main settings class"""

    run: RunConfig = RunConfig()  # Application run configuration
    api: ApiPrefix = ApiPrefix()  # API prefix configuration
    db: DatabaseConfig = DatabaseConfig()  # Database configuration
    auth_jwt: AuthJWT = AuthJWT()


settings = Settings()
