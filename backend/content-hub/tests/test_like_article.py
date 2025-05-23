import pytest
import pytest_asyncio
from typing import Any, AsyncGenerator
from sqlalchemy.ext.asyncio import AsyncSession

from api.auth.auth_utils import encode_jwt, hash_password
from core.models.like_article import LikeArticle
from core.models.user import User
from core.models.article import Article
from .conftest import async_client, get_async_session


@pytest_asyncio.fixture(scope="function")
async def setup_test_user(get_async_session: AsyncSession) -> AsyncGenerator[User, Any]:
    hashed_password = hash_password("test_password")
    test_user_dict = {
        "username": "test_user",
        "password": hashed_password,
        "email": "test@gmail.com"
    }
    test_user = User(**test_user_dict)
    async with get_async_session as session:
        session.add(test_user)
        await session.commit()
        await session.refresh(test_user)
    yield test_user
    async with get_async_session as session:
        await session.delete(test_user)
        await session.commit()


@pytest_asyncio.fixture(scope="function")
async def setup_second_user(get_async_session: AsyncSession) -> AsyncGenerator[User, Any]:
    hashed_password = hash_password("test_password")
    user_dict = {
        "username": "test_user2",
        "password": hashed_password,
        "email": "test2@gmail.com"
    }
    user = User(**user_dict)
    async with get_async_session as session:
        session.add(user)
        await session.commit()
        await session.refresh(user)
    yield user
    async with get_async_session as session:
        await session.delete(user)
        await session.commit()


@pytest_asyncio.fixture(scope="function")
async def setup_test_article(get_async_session: AsyncSession, setup_test_user: User) -> AsyncGenerator[Article, Any]:
    article_data = {
        "title": "Test Article",
        "content": "Some test content",
        "user_id": setup_test_user.id
    }
    test_article = Article(**article_data)
    async with get_async_session as session:
        session.add(test_article)
        await session.commit()
        await session.refresh(test_article)
    yield test_article
    async with get_async_session as session:
        await session.delete(test_article)
        await session.commit()


@pytest_asyncio.fixture()
async def authorized_client(async_client, setup_test_user):
    jwt_payload = {
        "sub": setup_test_user.username,
        "username": setup_test_user.username,
        "email": setup_test_user.email,
    }
    access_token = encode_jwt(jwt_payload)
    async_client.headers = {
        **async_client.headers,
        "Authorization": f"Bearer {access_token}"
    }
    return async_client


@pytest.mark.asyncio
async def test_create_like(authorized_client, setup_test_user, setup_test_article):
    like_data = {"article_id": setup_test_article.id, "user_id": setup_test_user.id}
    response = await authorized_client.post("/api/v1/like_articles/", json=like_data)
    assert response.status_code == 201, f"Expected status 201 but got {response.status_code}"
    data = response.json()
    assert data["article_id"] == like_data["article_id"]
    assert data["user_id"] == like_data["user_id"]


@pytest.mark.asyncio
async def test_get_like(authorized_client, setup_test_user, setup_test_article):
    like_data = {"article_id": setup_test_article.id, "user_id": setup_test_user.id}
    create_resp = await authorized_client.post("/api/v1/like_articles/", json=like_data)
    assert create_resp.status_code == 201, f"Creation failed: {create_resp.text}"
    get_resp = await authorized_client.get(f"/api/v1/like_articles/{like_data['article_id']}/{like_data['user_id']}")
    assert get_resp.status_code == 200, f"Get failed: {get_resp.text}"
    data = get_resp.json()
    assert data["article_id"] == like_data["article_id"]
    assert data["user_id"] == like_data["user_id"]


@pytest.mark.asyncio
async def test_create_duplicate_like(authorized_client, setup_test_user, setup_test_article):
    like_data = {"article_id": setup_test_article.id, "user_id": setup_test_user.id}
    response1 = await authorized_client.post("/api/v1/like_articles/", json=like_data)
    assert response1.status_code == 201, f"First creation failed: {response1.text}"
    response2 = await authorized_client.post("/api/v1/like_articles/", json=like_data)
    assert response2.status_code == 400, f"Duplicate creation did not fail: {response2.text}"
    data = response2.json()
    assert data.get("detail") == "Like already exists"


@pytest.mark.asyncio
async def test_get_like_not_found(authorized_client):
    response = await authorized_client.get("/api/v1/like_articles/9999/9999")
    assert response.status_code == 404, f"Expected 404 for non-existent like: {response.text}"
    data = response.json()
    assert data.get("detail") == "Like not found"


@pytest.mark.asyncio
async def test_delete_like(authorized_client, setup_test_user, setup_test_article):
    like_data = {"article_id": setup_test_article.id, "user_id": setup_test_user.id}
    create_resp = await authorized_client.post("/api/v1/like_articles/", json=like_data)
    assert create_resp.status_code == 201, f"Creation failed: {create_resp.text}"
    delete_resp = await authorized_client.delete(f"/api/v1/like_articles/{like_data['article_id']}/{like_data['user_id']}")
    assert delete_resp.status_code == 204, f"Deletion failed: {delete_resp.text}"
    get_resp = await authorized_client.get(f"/api/v1/like_articles/{like_data['article_id']}/{like_data['user_id']}")
    assert get_resp.status_code == 404, f"Deleted like still found: {get_resp.text}"


@pytest.mark.asyncio
async def test_delete_like_not_found(authorized_client, setup_test_user):
    response = await authorized_client.delete(f"/api/v1/like_articles/8888/{setup_test_user.id}")
    assert response.status_code == 404, f"Expected 404 for deletion of non-existent like: {response.text}"
    data = response.json()
    assert data.get("detail") == "Like not found"


@pytest.mark.asyncio
async def test_list_likes_by_article(authorized_client, setup_test_article, setup_test_user, setup_second_user):
    second_jwt_payload = {
        "sub": setup_second_user.username,
        "username": setup_second_user.username,
        "email": setup_second_user.email,
    }
    from api.auth.auth_utils import encode_jwt
    access_token2 = encode_jwt(second_jwt_payload)
    like_data1 = {"article_id": setup_test_article.id, "user_id": setup_test_user.id}
    like_data2 = {"article_id": setup_test_article.id, "user_id": setup_second_user.id}
    resp1 = await authorized_client.post("/api/v1/like_articles/", json=like_data1)
    assert resp1.status_code == 201, f"Response: {resp1.text}"
    second_client = authorized_client
    second_client.headers["Authorization"] = f"Bearer {access_token2}"
    resp2 = await second_client.post("/api/v1/like_articles/", json=like_data2)
    assert resp2.status_code == 201, f"Response: {resp2.text}"
    list_resp = await authorized_client.get(f"/api/v1/like_articles/article/{setup_test_article.id}")
    assert list_resp.status_code == 200, f"Listing likes for article failed: {list_resp.text}"
    data = list_resp.json()
    user_ids = {item.get("user_id") for item in data}
    assert setup_test_user.id in user_ids
    assert setup_second_user.id in user_ids


@pytest.mark.asyncio
async def test_list_likes_by_user(authorized_client, setup_test_user, get_async_session):
    article_data1 = {"title": "Article One", "content": "Content One", "user_id": setup_test_user.id}
    article_data2 = {"title": "Article Two", "content": "Content Two", "user_id": setup_test_user.id}

    async with get_async_session as session:
        article1 = Article(**article_data1)
        session.add(article1)
        await session.commit()
        await session.refresh(article1)
    async with get_async_session as session:
        article2 = Article(**article_data2)
        session.add(article2)
        await session.commit()
        await session.refresh(article2)

    payload1 = {"article_id": article1.id, "user_id": setup_test_user.id}
    payload2 = {"article_id": article2.id, "user_id": setup_test_user.id}
    resp1 = await authorized_client.post("/api/v1/like_articles/", json=payload1)
    assert resp1.status_code == 201, f"Response: {resp1.text}"
    resp2 = await authorized_client.post("/api/v1/like_articles/", json=payload2)
    assert resp2.status_code == 201, f"Response: {resp2.text}"
    list_resp = await authorized_client.get(f"/api/v1/like_articles/user/{setup_test_user.id}")
    assert list_resp.status_code == 200, f"Listing likes for user failed: {list_resp.text}"
    data = list_resp.json()
    article_ids = {item.get("article_id") for item in data}
    assert article1.id in article_ids
    assert article2.id in article_ids

    async with get_async_session as session:
        await session.delete(article1)
        await session.delete(article2)
        await session.commit()
