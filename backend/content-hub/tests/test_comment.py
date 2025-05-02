import pytest
import pytest_asyncio
from typing import Any, AsyncGenerator
from sqlalchemy.ext.asyncio import AsyncSession

from core.models.comment import Comment
from core.models.user import User
from core.models.article import Article
from core.schemas.comment import CommentCreate, CommentUpdate
from .conftest import async_client, get_async_session


@pytest_asyncio.fixture(scope="function")
async def setup_test_user(get_async_session: AsyncSession) -> AsyncGenerator[User, Any]:
    from api.auth.auth_utils import hash_password
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
    from api.auth.auth_utils import hash_password
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


@pytest_asyncio.fixture(scope="function")
async def setup_test_comment(
        get_async_session: AsyncSession,
        setup_test_user: User,
        setup_test_article: Article
) -> AsyncGenerator[Comment, Any]:
    comment_data = {
        "content": "Test Comment",
        "article_id": setup_test_article.id,
        "user_id": setup_test_user.id
    }
    test_comment = Comment(**comment_data)

    async with get_async_session as session:
        session.add(test_comment)
        await session.commit()
        await session.refresh(test_comment)

    yield test_comment

    async with get_async_session as session:
        await session.delete(test_comment)
        await session.commit()


@pytest.mark.asyncio
async def test_get_comment(async_client, setup_test_user, setup_test_article):
    comment_data = {
        "content": "Test Comment",
        "article_id": setup_test_article.id,
        "user_id": setup_test_user.id
    }
    create_resp = await async_client.post("/api/v1/comments/", json=comment_data)
    assert create_resp.status_code == 201, f"Creation failed: {create_resp.text}"
    created_comment = create_resp.json()
    comment_id = created_comment["id"]

    get_resp = await async_client.get(f"/api/v1/comments/{comment_id}")
    assert get_resp.status_code == 200, f"Get failed: {get_resp.text}"
    data = get_resp.json()
    assert data["id"] == comment_id
    assert data["content"] == comment_data["content"]


@pytest.mark.asyncio
async def test_update_comment(async_client, setup_test_user, setup_test_article):
    comment_data = {
        "content": "Initial Comment",
        "article_id": setup_test_article.id,
        "user_id": setup_test_user.id
    }
    create_resp = await async_client.post("/api/v1/comments/", json=comment_data)
    assert create_resp.status_code == 201, f"Creation failed: {create_resp.text}"
    created_comment = create_resp.json()
    comment_id = created_comment["id"]

    update_data = {"content": "Updated Comment"}
    update_resp = await async_client.put(f"/api/v1/comments/{comment_id}", json=update_data)
    assert update_resp.status_code == 200, f"Update failed: {update_resp.text}"
    updated_comment = update_resp.json()
    assert updated_comment["content"] == update_data["content"]


@pytest.mark.asyncio
async def test_delete_comment(async_client, setup_test_user, setup_test_article):
    comment_data = {
        "content": "To be deleted",
        "article_id": setup_test_article.id,
        "user_id": setup_test_user.id
    }
    create_resp = await async_client.post("/api/v1/comments/", json=comment_data)
    assert create_resp.status_code == 201, f"Creation failed: {create_resp.text}"
    comment_id = create_resp.json()["id"]

    delete_resp = await async_client.delete(f"/api/v1/comments/{comment_id}")
    assert delete_resp.status_code == 204, f"Deletion failed: {delete_resp.text}"

    get_resp = await async_client.get(f"/api/v1/comments/{comment_id}")
    assert get_resp.status_code == 404, f"Deleted comment still found: {get_resp.text}"


@pytest.mark.asyncio
async def test_get_comment_not_found(async_client):
    response = await async_client.get("/api/v1/comments/9999")
    assert response.status_code == 404, f"Expected 404 for non-existent comment: {response.text}"
    data = response.json()
    assert data.get("detail") == "Comment not found"


@pytest.mark.asyncio
async def test_list_comments_by_article(async_client, setup_test_user, setup_test_article):
    comment1 = {
        "content": "Article Comment 1",
        "article_id": setup_test_article.id,
        "user_id": setup_test_user.id
    }
    comment2 = {
        "content": "Article Comment 2",
        "article_id": setup_test_article.id,
        "user_id": setup_test_user.id
    }
    resp1 = await async_client.post("/api/v1/comments/", json=comment1)
    assert resp1.status_code == 201, f"Response: {resp1.text}"
    resp2 = await async_client.post("/api/v1/comments/", json=comment2)
    assert resp2.status_code == 201, f"Response: {resp2.text}"
    list_resp = await async_client.get(f"/api/v1/comments/article/{setup_test_article.id}")
    assert list_resp.status_code == 200, f"Listing by article failed: {list_resp.text}"
    data = list_resp.json()
    contents = {item.get("content") for item in data}
    assert comment1["content"] in contents
    assert comment2["content"] in contents


@pytest.mark.asyncio
async def test_list_comments_by_user(async_client, setup_test_user, setup_test_article):
    comment1 = {
        "content": "User Comment 1",
        "article_id": setup_test_article.id,
        "user_id": setup_test_user.id
    }
    comment2 = {
        "content": "User Comment 2",
        "article_id": setup_test_article.id,
        "user_id": setup_test_user.id
    }
    resp1 = await async_client.post("/api/v1/comments/", json=comment1)
    assert resp1.status_code == 201, f"Response: {resp1.text}"
    resp2 = await async_client.post("/api/v1/comments/", json=comment2)
    assert resp2.status_code == 201, f"Response: {resp2.text}"
    list_resp = await async_client.get(f"/api/v1/comments/user/{setup_test_user.id}")
    assert list_resp.status_code == 200, f"Listing by user failed: {list_resp.text}"
    data = list_resp.json()
    contents = {item.get("content") for item in data}
    assert comment1["content"] in contents
    assert comment2["content"] in contents
