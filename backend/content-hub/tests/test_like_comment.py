import pytest
import pytest_asyncio
from typing import Any, AsyncGenerator
from sqlalchemy.ext.asyncio import AsyncSession

from api.auth.auth_utils import encode_jwt, hash_password
from core.models.user import User
from core.models.comment import Comment
from core.models.article import Article
from .conftest import async_client, get_async_session


@pytest_asyncio.fixture(scope="function")
async def setup_test_user(get_async_session: AsyncSession) -> AsyncGenerator[User, Any]:
    hashed_password = hash_password("test_password")
    user = User(username="test_user", password=hashed_password, email="test@gmail.com")
    async with get_async_session as session:
        session.add(user)
        await session.commit()
        await session.refresh(user)
    yield user
    async with get_async_session as session:
        await session.delete(user)
        await session.commit()


@pytest_asyncio.fixture(scope="function")
async def setup_second_user(get_async_session: AsyncSession) -> AsyncGenerator[User, Any]:
    hashed_password = hash_password("test_password")
    user = User(username="test_user2", password=hashed_password, email="test2@gmail.com")
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
    article = Article(title="Test Article", content="Some test content", user_id=setup_test_user.id)
    async with get_async_session as session:
        session.add(article)
        await session.commit()
        await session.refresh(article)
    yield article
    async with get_async_session as session:
        await session.delete(article)
        await session.commit()


@pytest_asyncio.fixture(scope="function")
async def setup_test_comment(
    get_async_session: AsyncSession,
    setup_test_user: User,
    setup_test_article: Article
) -> AsyncGenerator[Comment, Any]:
    comment = Comment(content="Test Comment", user_id=setup_test_user.id, article_id=setup_test_article.id)
    async with get_async_session as session:
        session.add(comment)
        await session.commit()
        await session.refresh(comment)
    yield comment
    async with get_async_session as session:
        await session.delete(comment)
        await session.commit()


@pytest_asyncio.fixture()
async def authorized_client(async_client, setup_test_user):
    jwt_payload = {
        "sub": setup_test_user.username,
        "username": setup_test_user.username,
        "email": setup_test_user.email,
    }
    token = encode_jwt(jwt_payload)
    async_client.headers = {**async_client.headers, "Authorization": f"Bearer {token}"}
    return async_client


@pytest.mark.asyncio
async def test_create_like(authorized_client, setup_test_user, setup_test_comment):
    payload = {"comment_id": setup_test_comment.id, "user_id": setup_test_user.id}
    response = await authorized_client.post("/api/v1/like_comments/", json=payload)
    assert response.status_code == 201
    data = response.json()
    assert data["comment_id"] == payload["comment_id"]
    assert data["user_id"] == payload["user_id"]


@pytest.mark.asyncio
async def test_get_like(authorized_client, setup_test_user, setup_test_comment):
    payload = {"comment_id": setup_test_comment.id, "user_id": setup_test_user.id}
    await authorized_client.post("/api/v1/like_comments/", json=payload)
    response = await authorized_client.get(f"/api/v1/like_comments/{payload['comment_id']}/{payload['user_id']}")
    assert response.status_code == 200
    data = response.json()
    assert data["comment_id"] == payload["comment_id"]
    assert data["user_id"] == payload["user_id"]


@pytest.mark.asyncio
async def test_create_duplicate_like(authorized_client, setup_test_user, setup_test_comment):
    payload = {"comment_id": setup_test_comment.id, "user_id": setup_test_user.id}
    await authorized_client.post("/api/v1/like_comments/", json=payload)
    response = await authorized_client.post("/api/v1/like_comments/", json=payload)
    assert response.status_code == 400
    assert response.json()["detail"] == "Like already exists"


@pytest.mark.asyncio
async def test_get_like_not_found(authorized_client):
    response = await authorized_client.get("/api/v1/like_comments/12345/54321")
    assert response.status_code == 404
    assert response.json()["detail"] == "Like not found"


@pytest.mark.asyncio
async def test_delete_like(authorized_client, setup_test_user, setup_test_comment):
    payload = {"comment_id": setup_test_comment.id, "user_id": setup_test_user.id}
    await authorized_client.post("/api/v1/like_comments/", json=payload)
    delete_resp = await authorized_client.delete(f"/api/v1/like_comments/{payload['comment_id']}/{payload['user_id']}")
    assert delete_resp.status_code == 204
    get_resp = await authorized_client.get(f"/api/v1/like_comments/{payload['comment_id']}/{payload['user_id']}")
    assert get_resp.status_code == 404


@pytest.mark.asyncio
async def test_delete_like_not_found(authorized_client):
    response = await authorized_client.delete("/api/v1/like_comments/8888/8888")
    assert response.status_code == 404
    assert response.json()["detail"] == "Like not found"


@pytest.mark.asyncio
async def test_list_likes_by_comment(
    authorized_client, setup_test_user, setup_second_user, setup_test_comment
):
    payload1 = {"comment_id": setup_test_comment.id, "user_id": setup_test_user.id}
    payload2 = {"comment_id": setup_test_comment.id, "user_id": setup_second_user.id}

    await authorized_client.post("/api/v1/like_comments/", json=payload1)

    token2 = encode_jwt({
        "sub": setup_second_user.username,
        "username": setup_second_user.username,
        "email": setup_second_user.email,
    })
    headers2 = {"Authorization": f"Bearer {token2}"}
    await authorized_client.post("/api/v1/like_comments/", json=payload2, headers=headers2)

    list_resp = await authorized_client.get(f"/api/v1/like_comments/comment/{setup_test_comment.id}")
    assert list_resp.status_code == 200
    user_ids = {like["user_id"] for like in list_resp.json()}
    assert setup_test_user.id in user_ids
    assert setup_second_user.id in user_ids


@pytest.mark.asyncio
async def test_list_likes_by_user(authorized_client, setup_test_user, get_async_session, setup_test_article):
    comment1 = Comment(content="Comment 1", user_id=setup_test_user.id, article_id=setup_test_article.id)
    comment2 = Comment(content="Comment 2", user_id=setup_test_user.id, article_id=setup_test_article.id)
    async with get_async_session as session:
        session.add_all([comment1, comment2])
        await session.commit()
        await session.refresh(comment1)
        await session.refresh(comment2)

    payload1 = {"comment_id": comment1.id, "user_id": setup_test_user.id}
    payload2 = {"comment_id": comment2.id, "user_id": setup_test_user.id}
    await authorized_client.post("/api/v1/like_comments/", json=payload1)
    await authorized_client.post("/api/v1/like_comments/", json=payload2)

    list_resp = await authorized_client.get(f"/api/v1/like_comments/user/{setup_test_user.id}")
    assert list_resp.status_code == 200
    comment_ids = {like["comment_id"] for like in list_resp.json()}
    assert comment1.id in comment_ids
    assert comment2.id in comment_ids

    async with get_async_session as session:
        await session.delete(comment1)
        await session.delete(comment2)
        await session.commit()
