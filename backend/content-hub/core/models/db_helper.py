from typing import AsyncGenerator
from sqlalchemy.ext.asyncio import (
    create_async_engine,
    AsyncEngine,
    async_sessionmaker,
    AsyncSession,
)

from core.config import settings


class DatabaseHelper:
    def __init__(
        self,
        url: str,
        echo: bool = False,
        echo_pool: bool = False,
        max_overflow: int = 10,
        pool_size: int = 20,
    ) -> None:
        """
        Initialize a new instance of DatabaseHelper with the provided database URL,
        echo and echo_pool settings, and optional max_overflow and pool_size.

        :param url: The URL of the database to connect to.
        :param echo: Whether to echo the SQL queries to stdout.
        :param echo_pool: Whether to echo the SQL queries pulled from the connection pool.
        :param max_overflow: The maximum number of connectors in the pool that can be in a
                state of connection to the database.
        :param pool_size: The number of connectors in the pool that can be used at the same
                time.
        """
        self.engine: AsyncEngine = create_async_engine(
            url=url,
            echo=echo,
            echo_pool=echo_pool,
            max_overflow=max_overflow,
            pool_size=pool_size,
        )
        self.session_factory = async_sessionmaker(
            bind=self.engine,
            autoflush=False,
            autocommit=False,
            expire_on_commit=False,
        )

    async def dispose(self) -> None:
        """Dispose of the database engine, closing all connections"""
        await self.engine.dispose()

    async def session_getter(self) -> AsyncGenerator[AsyncSession, None]:
        """
        Generate an asynchronous iterator yielding database sessions.

        :return: An asynchronous iterator yielding database sessions.
        """
        async with self.session_factory() as session:
            yield session


# Create an instance of DatabaseHelper with settings from the configuration
db_helper = DatabaseHelper(
    url=str(settings.db.url),
    echo=settings.db.echo,
    echo_pool=settings.db.echo_pool,
    max_overflow=settings.db.max_overflow,
    pool_size=settings.db.pool_size,
)
