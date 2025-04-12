from typing import Any, AsyncGenerator

import pytest
import pytest_asyncio

from sqlalchemy.ext.asyncio import AsyncSession

from core.models.db_helper import db_helper
from api.auth.auth_utils import hash_password
from core.models.user import User
from .conftest import get_async_session
from .conftest import async_client
session_getter = db_helper.session_getter

@pytest_asyncio.fixture(scope="function")
async def setup_test_user(get_async_session: AsyncSession) -> AsyncGenerator[User, Any]:
    hashed_password = hash_password("test_password")
    test_user_dict = {
        "username": "test_user",
        "password_hash": hashed_password,
        "email": "test@gmail.com"
    }
    test_user = User(**test_user_dict)
    async with get_async_session as session:
        session.add(test_user)
        await session.commit()
    yield test_user
    async with get_async_session as session:
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


@pytest.mark.asyncio
async def test_register_successful(async_client):
    payload = {
        "username": "test_register_success",
        "email": "test_register_success@example.com",
        "password": "my_secure_password"
    }
    response = await async_client.post("/jwt/register/", json=payload)
    assert response.status_code == 201, f"First registration failed: {response.text}"
    resp_data = response.json()
    assert "access_token" in resp_data
    assert resp_data["token_type"] == "Bearer"

@pytest.mark.asyncio
async def test_register_duplicate(async_client):
    payload = {
        "username": "test_register_duplicate",
        "email": "test_register_duplicate@example.com",
        "password": "my_secure_password"
    }
    response1 = await async_client.post("/jwt/register/", json=payload)
    assert response1.status_code == 201, f"First registration failed: {response1.text}"
    response2 = await async_client.post("/jwt/register/", json=payload)
    assert response2.status_code == 400, f"Duplicate registration did not produce expected error: {response2.text}"
    resp_data = response2.json()
    assert resp_data["detail"] == "Username or email already exists."

@pytest.mark.asyncio
async def test_register_missing_field(async_client):
    payload = {
        "username": "test_register_missing",
        "password": "my_secure_password"
    }
    response = await async_client.post("/jwt/register/", json=payload)
    assert response.status_code == 422, f"Validation error was not triggered: {response.text}"
