import pytest
import pytest_asyncio
from typing import Any, AsyncGenerator
from sqlalchemy.ext.asyncio import AsyncSession

from core.models.like_comment import LikeComment
from core.models.user import User
from core.models.comment import Comment
from core.models.article import Article
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
        "user_id": setup_test_user.id,
        "article_id": setup_test_article.id
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


@pytest_asyncio.fixture(scope="function")
async def setup_test_like_comment(
    get_async_session: AsyncSession,
    setup_test_user: User,
    setup_test_comment: Comment
) -> AsyncGenerator[LikeComment, Any]:
    like_comment = LikeComment(comment_id=setup_test_comment.id, user_id=setup_test_user.id)
    async with get_async_session as session:
        session.add(like_comment)
        await session.commit()
        await session.refresh(like_comment)
    yield like_comment
    async with get_async_session as session:
        await session.delete(like_comment)
        await session.commit()


@pytest_asyncio.fixture(scope="function")
async def setup_second_like_comment(
    get_async_session: AsyncSession,
    setup_second_user: User,
    setup_test_comment: Comment
) -> AsyncGenerator[LikeComment, Any]:
    like_comment = LikeComment(comment_id=setup_test_comment.id, user_id=setup_second_user.id)
    async with get_async_session as session:
        session.add(like_comment)
        await session.commit()
        await session.refresh(like_comment)
    yield like_comment
    async with get_async_session as session:
        await session.delete(like_comment)
        await session.commit()


@pytest.mark.asyncio
async def test_create_like(async_client, setup_test_user, setup_test_comment):
    like_data = {"comment_id": setup_test_comment.id, "user_id": setup_test_user.id}
    response = await async_client.post("/api/v1/like_comments/", json=like_data)
    assert response.status_code == 201, f"Expected status 201 but got {response.status_code}"
    data = response.json()
    assert data["comment_id"] == like_data["comment_id"]
    assert data["user_id"] == like_data["user_id"]


@pytest.mark.asyncio
async def test_get_like(async_client, setup_test_like_comment):
    like = setup_test_like_comment
    get_resp = await async_client.get(f"/api/v1/like_comments/{like.comment_id}/{like.user_id}")
    assert get_resp.status_code == 200, f"Get failed: {get_resp.text}"
    data = get_resp.json()
    assert data["comment_id"] == like.comment_id
    assert data["user_id"] == like.user_id


@pytest.mark.asyncio
async def test_create_duplicate_like(async_client, setup_test_user, setup_test_comment, setup_test_like_comment):
    duplicate_data = {"comment_id": setup_test_comment.id, "user_id": setup_test_user.id}
    response = await async_client.post("/api/v1/like_comments/", json=duplicate_data)
    assert response.status_code == 400, f"Duplicate creation did not fail: {response.text}"
    data = response.json()
    assert data.get("detail") == "Like already exists"



@pytest.mark.asyncio
async def test_get_like_not_found(async_client):
    response = await async_client.get("/api/v1/like_comments/5465765/546545")
    assert response.status_code == 404, f"Expected 404 for non-existent like: {response.text}"
    data = response.json()
    assert data.get("detail") == "Like not found"


@pytest.mark.asyncio
async def test_delete_like(async_client, setup_test_like_comment):
    like = setup_test_like_comment
    delete_resp = await async_client.delete(f"/api/v1/like_comments/{like.comment_id}/{like.user_id}")
    assert delete_resp.status_code == 204, f"Deletion failed: {delete_resp.text}"
    get_resp = await async_client.get(f"/api/v1/like_comments/{like.comment_id}/{like.user_id}")
    assert get_resp.status_code == 404, f"Deleted like still found: {get_resp.text}"


@pytest.mark.asyncio
async def test_delete_like_not_found(async_client):
    response = await async_client.delete("/api/v1/like_comments/8888/8888")
    assert response.status_code == 404, f"Expected 404 for deletion of non-existent like: {response.text}"
    data = response.json()
    assert data.get("detail") == "Like not found"


@pytest.mark.asyncio
async def test_list_likes_by_comment(
    async_client, setup_test_comment, setup_test_like_comment, setup_second_like_comment
):
    list_resp = await async_client.get(f"/api/v1/like_comments/comment/{setup_test_comment.id}")
    assert list_resp.status_code == 200, f"Listing likes for comment failed: {list_resp.text}"
    data = list_resp.json()
    user_ids = {item.get("user_id") for item in data}
    assert setup_test_like_comment.user_id in user_ids
    assert setup_second_like_comment.user_id in user_ids


@pytest.mark.asyncio
async def test_list_likes_by_user(async_client, setup_test_user, get_async_session, setup_test_comment):
    article_data = {"title": "Article for Comments", "content": "Content", "user_id": setup_test_user.id}
    async with get_async_session as session:
        article = Article(**article_data)
        session.add(article)
        await session.commit()
        await session.refresh(article)

    comment_data1 = {"content": "Comment One", "user_id": setup_test_user.id, "article_id": article.id}
    comment_data2 = {"content": "Comment Two", "user_id": setup_test_user.id, "article_id": article.id}
    async with get_async_session as session:
        comment1 = Comment(**comment_data1)
        session.add(comment1)
        await session.commit()
        await session.refresh(comment1)
    async with get_async_session as session:
        comment2 = Comment(**comment_data2)
        session.add(comment2)
        await session.commit()
        await session.refresh(comment2)

    payload1 = {"comment_id": comment1.id, "user_id": setup_test_user.id}
    payload2 = {"comment_id": comment2.id, "user_id": setup_test_user.id}
    resp1 = await async_client.post("/api/v1/like_comments/", json=payload1)
    assert resp1.status_code == 201, f"Response: {resp1.text}"
    resp2 = await async_client.post("/api/v1/like_comments/", json=payload2)
    assert resp2.status_code == 201, f"Response: {resp2.text}"
    list_resp = await async_client.get(f"/api/v1/like_comments/user/{setup_test_user.id}")
    assert list_resp.status_code == 200, f"Listing likes for user failed: {list_resp.text}"
    data = list_resp.json()
    comment_ids = {item.get("comment_id") for item in data}
    assert comment1.id in comment_ids
    assert comment2.id in comment_ids

    async with get_async_session as session:
        await session.delete(comment1)
        await session.delete(comment2)
        await session.delete(article)
        await session.commit()
