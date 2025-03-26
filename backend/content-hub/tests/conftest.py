import os
import sys
from collections.abc import AsyncGenerator
import pytest_asyncio
from sqlalchemy import NullPool
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine, async_sessionmaker
from core.models.db_helper import db_helper
from main import app

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "../")))

from core.config import settings
from core.models.base import Base

engine = create_async_engine(
    url=str(settings.db.test_url),
    poolclass=NullPool
)
async_session_maker = async_sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)

@pytest_asyncio.fixture(scope="session", autouse=True)
async def prepare_database():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    yield
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)

async def _create_async_session_native() -> AsyncGenerator[AsyncSession, None]:
    async with async_session_maker() as session:
        yield session

@pytest_asyncio.fixture(scope="function")
async def get_async_session_native() -> AsyncGenerator[AsyncSession, None]:
    async for session in _create_async_session_native():
        yield session

async def override_get_async_session():
    async for session in _create_async_session_native():
        yield session

app.dependency_overrides[db_helper.session_getter] = override_get_async_session

@pytest_asyncio.fixture
async def async_client():
    from httpx import AsyncClient, ASGITransport
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as ac:
        yield ac
