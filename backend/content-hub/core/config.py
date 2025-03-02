from typing import Literal

from pydantic import BaseModel
from pydantic import PostgresDsn
from pydantic_settings import (
	BaseSettings,
	SettingsConfigDict,
)


class RunConfig(BaseModel):
	host: str = "0.0.0.0"
	port: int = 8000


class DatabaseConfig(BaseModel):
	url: PostgresDsn
	echo: bool = False
	echo_pull: bool = False
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
