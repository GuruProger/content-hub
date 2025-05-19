import pytest
import pytest_asyncio
from typing import Any, AsyncGenerator
from sqlalchemy.ext.asyncio import AsyncSession

from core.models.comment import Comment
from core.models.user import User
from core.models.article import Article
from core.schemas.comment import CommentCreate, CommentUpdate
from api.auth.auth_utils import hash_password, encode_jwt
from .conftest import async_client, get_async_session


@pytest_asyncio.fixture(scope="function")
async def setup_test_user(get_async_session: AsyncSession) -> AsyncGenerator[User, Any]:
    hashed_password = hash_password("test_password")
    test_user = User(
        username="test_user",
        password=hashed_password,
        email="test@gmail.com"
    )
    async with get_async_session as session:
        session.add(test_user)
        await session.commit()
        await session.refresh(test_user)
    yield test_user
    async with get_async_session as session:
        await session.delete(test_user)
        await session.commit()


@pytest_asyncio.fixture(scope="function")
async def setup_test_article(get_async_session: AsyncSession, setup_test_user: User) -> AsyncGenerator[Article, Any]:
    article = Article(
        title="Test Article",
        content="Some test content",
        user_id=setup_test_user.id
    )
    async with get_async_session as session:
        session.add(article)
        await session.commit()
        await session.refresh(article)
    yield article
    async with get_async_session as session:
        await session.delete(article)
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
async def test_get_comment(authorized_client, setup_test_user, setup_test_article):
    comment_data = {
        "content": "Test Comment",
        "article_id": setup_test_article.id,
        "user_id": setup_test_user.id
    }
    create_resp = await authorized_client.post("/api/v1/comments/", json=comment_data)
    assert create_resp.status_code == 201
    comment_id = create_resp.json()["id"]

    get_resp = await authorized_client.get(f"/api/v1/comments/{comment_id}")
    assert get_resp.status_code == 200
    assert get_resp.json()["id"] == comment_id


@pytest.mark.asyncio
async def test_update_comment(authorized_client, setup_test_user, setup_test_article):
    comment_data = {
        "content": "Initial Comment",
        "article_id": setup_test_article.id,
        "user_id": setup_test_user.id
    }
    create_resp = await authorized_client.post("/api/v1/comments/", json=comment_data)
    assert create_resp.status_code == 201
    comment_id = create_resp.json()["id"]

    update_data = {"content": "Updated Comment"}
    update_resp = await authorized_client.put(f"/api/v1/comments/{comment_id}", json=update_data)
    assert update_resp.status_code == 200
    assert update_resp.json()["content"] == "Updated Comment"


@pytest.mark.asyncio
async def test_delete_comment(authorized_client, setup_test_user, setup_test_article):
    comment_data = {
        "content": "To be deleted",
        "article_id": setup_test_article.id,
        "user_id": setup_test_user.id
    }
    create_resp = await authorized_client.post("/api/v1/comments/", json=comment_data)
    assert create_resp.status_code == 201
    comment_id = create_resp.json()["id"]

    delete_resp = await authorized_client.delete(f"/api/v1/comments/{comment_id}")
    assert delete_resp.status_code == 204

    get_resp = await authorized_client.get(f"/api/v1/comments/{comment_id}")
    assert get_resp.status_code == 404


@pytest.mark.asyncio
async def test_list_comments_by_article(authorized_client, setup_test_user, setup_test_article):
    for i in range(2):
        comment_data = {
            "content": f"Article Comment {i+1}",
            "article_id": setup_test_article.id,
            "user_id": setup_test_user.id
        }
        resp = await authorized_client.post("/api/v1/comments/", json=comment_data)
        assert resp.status_code == 201

    list_resp = await authorized_client.get(f"/api/v1/comments/article/{setup_test_article.id}")
    assert list_resp.status_code == 200
    contents = {c["content"] for c in list_resp.json()}
    assert "Article Comment 1" in contents
    assert "Article Comment 2" in contents


@pytest.mark.asyncio
async def test_list_comments_by_user(authorized_client, setup_test_user, setup_test_article):
    for i in range(2):
        comment_data = {
            "content": f"User Comment {i+1}",
            "article_id": setup_test_article.id,
            "user_id": setup_test_user.id
        }
        resp = await authorized_client.post("/api/v1/comments/", json=comment_data)
        assert resp.status_code == 201

    list_resp = await authorized_client.get(f"/api/v1/comments/user/{setup_test_user.id}")
    assert list_resp.status_code == 200
    contents = {c["content"] for c in list_resp.json()}
    assert "User Comment 1" in contents
    assert "User Comment 2" in contents
