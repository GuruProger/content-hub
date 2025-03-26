import pytest
from sqlalchemy.ext.asyncio import AsyncSession

from .conftest import get_async_session_native as session

@pytest.mark.asyncio
async def test_eq(session: AsyncSession):
    assert 1 == 1

