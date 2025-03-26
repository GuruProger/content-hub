from typing import Any, AsyncGenerator

import pytest
import pytest_asyncio
from httpx import AsyncClient, ASGITransport
from sqlalchemy.ext.asyncio import AsyncSession

from api.auth.schemas import Token
from core.models import User
from main import app
from core.models.db_helper import db_helper
from api.auth.auth_utils import hash_password
from core.models.user import User
from .conftest import get_async_session_native as session
from .conftest import async_client
session_getter = db_helper.session_getter

@pytest_asyncio.fixture(scope="function")
async def setup_test_user(get_async_session_native: AsyncSession) -> AsyncGenerator[User, Any]:
    hashed_password = hash_password("test_password")
    test_user_dict = {
        "username": "test_user",
        "password_hash": hashed_password,
        "email": "test@gmail.com"
    }
    test_user = User(**test_user_dict)
    async with get_async_session_native as session:
        session.add(test_user)
        await session.commit()
    yield test_user
    async with get_async_session_native as session:
        await session.delete(test_user)
        await session.commit()




@pytest.mark.asyncio
async def test_login_user(async_client, setup_test_user: User):
    response = await async_client.post(
        "/jwt/login/",
        json={
            "username": setup_test_user.username,
            "password": "test_password",
            "email": setup_test_user.email,
        }
    )
    assert response.status_code == 200
    response_data = response.json()
    assert "access_token" in response_data
    assert response_data["token_type"] == "Bearer"


@pytest.mark.asyncio
async def test_users_me(async_client, setup_test_user: User):
    login_response = await async_client.post(
        "/jwt/login/",
        json={
            "username": setup_test_user.username,
            "password": "test_password",
            "email": setup_test_user.email,
        }
    )
    assert login_response.status_code == 200
    token = login_response.json().get("access_token")

    response = await async_client.get(
        "/jwt/users/me/",
        headers={"Authorization": f"Bearer {token}"}
    )
    assert response.status_code == 200
    response_data = response.json()
    assert response_data["username"] == setup_test_user.username
    assert "email" in response_data
    assert "logged_in_at" in response_data

