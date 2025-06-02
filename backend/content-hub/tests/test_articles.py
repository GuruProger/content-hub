from uuid import uuid4

import pytest
import pytest_asyncio

BASE_URL = "/api/v1/articles/"  # Base URL for article API endpoints


async def _login_user(async_client, username: str, password: str) -> str:
    """Authenticate user and return access token."""
    response = await async_client.post(
        "/jwt/login/", data={"username": username, "password": password}
    )
    assert response.status_code == 200, f"Login failed: {response.text}"
    return response.json()["access_token"]


@pytest_asyncio.fixture(scope="function")
async def test_user_id(async_client, test_user_data):
    """Create a test user and return the user ID."""
    response = await async_client.post(
        "/api/v1/users/",
        data=test_user_data,
    )
    assert response.status_code == 201
    return response.json()["id"]


@pytest_asyncio.fixture(scope="function")
async def test_user_data():
    """Generate user data for testing."""
    return {
        "username": f"test_user_{uuid4().hex[:8]}",
        "email": f"test_{uuid4().hex[:8]}@example.com",
        "password": "test_password123",
    }


@pytest_asyncio.fixture(scope="function")
async def auth_token(async_client, test_user_data):
    """Get authentication token for test user."""
    return await _login_user(
        async_client, test_user_data["username"], test_user_data["password"]
    )


@pytest_asyncio.fixture(scope="function")
async def article_data():
    """Generate random article data for testing."""
    return {
        "title": f"Test Article {uuid4().hex[:8]}",
        "content": f"This is a test article content {uuid4().hex}",
        "is_published": True,
        "tags": ["test", "article", "api"],
    }


# Test class for Article API endpoints
class TestArticleAPI:
    """
    Test suite for Article API endpoints.

    This class contains tests for all CRUD operations on article resources,
    including creation, retrieval, updating, and deletion of articles.
    It also includes tests for related functionality like getting user articles
    and suggested articles.
    """

    @staticmethod
    async def _create_article(async_client, user_id, article_data, auth_token):
        """Helper method to create an article and return its ID."""
        create_data = article_data.copy()
        create_data["user_id"] = user_id

        headers = {"Authorization": f"Bearer {auth_token}"}

        response = await async_client.post(
            BASE_URL,
            json=create_data,
            headers=headers,
        )
        assert response.status_code == 201
        return response.json()["id"]

    @pytest.mark.asyncio
    async def test_create_article(
        self, async_client, test_user_id, article_data, auth_token
    ):
        """
        Test creating an article.
        Verifies that the article is created successfully with all fields.
        """
        # Prepare article data with user ID
        create_data = article_data.copy()
        create_data["user_id"] = test_user_id

        headers = {"Authorization": f"Bearer {auth_token}"}

        # Send POST request to create article
        response = await async_client.post(
            BASE_URL,
            json=create_data,
            headers=headers,
        )

        # Verify successful creation
        assert response.status_code == 201
        response_data = response.json()

        # Verify response fields match input data
        assert response_data["title"] == create_data["title"]
        assert response_data["content"] == create_data["content"]
        assert response_data["user_id"] == test_user_id
        assert response_data["is_published"] == create_data["is_published"]

        # Check that tags were created
        assert len(response_data["tags"]) == len(create_data["tags"])
        tag_names = [tag["name"] for tag in response_data["tags"]]
        for tag_name in create_data["tags"]:
            assert tag_name in tag_names

    @pytest.mark.asyncio
    async def test_get_article(
        self, async_client, test_user_id, article_data, auth_token
    ):
        """
        Test retrieving an article by ID.
        Creates an article and then verifies it can be retrieved with correct data.
        """
        # First create an article
        article_id = await self._create_article(
            async_client, test_user_id, article_data, auth_token
        )

        # Then retrieve it (GET requests may not require authentication)
        response = await async_client.get(f"{BASE_URL}{article_id}")

        # Verify successful retrieval
        assert response.status_code == 200
        response_data = response.json()

        # Verify response data matches what was created
        assert response_data["id"] == article_id
        assert response_data["title"] == article_data["title"]
        assert response_data["content"] == article_data["content"]
        assert response_data["user_id"] == test_user_id

        # Check tags
        tag_names = [tag["name"] for tag in response_data["tags"]]
        for tag_name in article_data["tags"]:
            assert tag_name in tag_names

    @pytest.mark.asyncio
    async def test_get_nonexistent_article(self, async_client):
        """
        Test retrieving a non-existent article.
        Verifies the API returns a 404 error.
        """
        # Use an ID that shouldn't exist
        nonexistent_id = 99999
        response = await async_client.get(f"{BASE_URL}{nonexistent_id}")

        # Verify not found error
        assert response.status_code == 404
        assert "detail" in response.json()

    @pytest.mark.asyncio
    async def test_update_article(
        self, async_client, test_user_id, article_data, auth_token
    ):
        """
        Test updating an article.
        Creates an article, updates it, and verifies the changes.
        """
        # First create an article
        article_id = await self._create_article(
            async_client, test_user_id, article_data, auth_token
        )

        # Prepare update data
        update_data = {
            "title": "Updated Article Title",
            "content": "This content has been updated",
            "is_published": False,
            "tags": ["updated", "tags"],
        }

        headers = {"Authorization": f"Bearer {auth_token}"}

        # Send update request
        response = await async_client.patch(
            f"{BASE_URL}{article_id}",
            json=update_data,
            headers=headers,
        )

        # Verify successful update
        assert response.status_code == 200
        response_data = response.json()

        # Verify updated fields
        assert response_data["title"] == update_data["title"]
        assert response_data["content"] == update_data["content"]
        assert response_data["is_published"] == update_data["is_published"]

        # Check updated tags
        tag_names = [tag["name"] for tag in response_data["tags"]]
        assert set(tag_names) == set(update_data["tags"])

        # Verify original tags were removed
        for tag in article_data["tags"]:
            if tag not in update_data["tags"]:
                assert tag not in tag_names

    @pytest.mark.asyncio
    async def test_update_nonexistent_article(self, async_client, auth_token):
        """
        Test updating a non-existent article.
        Verifies the API returns a 404 error.
        """
        nonexistent_id = 99999
        update_data = {"title": "Update Non-existent Article"}

        headers = {"Authorization": f"Bearer {auth_token}"}

        response = await async_client.patch(
            f"{BASE_URL}{nonexistent_id}",
            json=update_data,
            headers=headers,
        )

        assert response.status_code == 404
        assert "detail" in response.json()

    @pytest.mark.asyncio
    async def test_delete_article(
        self, async_client, test_user_id, article_data, auth_token
    ):
        """
        Test deleting an article.
        Creates an article, deletes it, and verifies it cannot be retrieved afterward.
        """
        # First create an article
        article_id = await self._create_article(
            async_client, test_user_id, article_data, auth_token
        )

        headers = {"Authorization": f"Bearer {auth_token}"}

        # Delete the article
        response = await async_client.delete(f"{BASE_URL}{article_id}", headers=headers)
        assert response.status_code == 204

        # Try to get the deleted article
        get_response = await async_client.get(f"{BASE_URL}{article_id}")
        assert get_response.status_code == 404

    @pytest.mark.asyncio
    async def test_delete_nonexistent_article(self, async_client, auth_token):
        """
        Test deleting a non-existent article.
        Verifies the API returns a 404 error.
        """
        nonexistent_id = 99999
        headers = {"Authorization": f"Bearer {auth_token}"}

        response = await async_client.delete(
            f"{BASE_URL}{nonexistent_id}", headers=headers
        )

        assert response.status_code == 404
        assert "detail" in response.json()

    @pytest.mark.asyncio
    async def test_get_user_articles(
        self, async_client, test_user_id, article_data, auth_token
    ):
        """
        Test retrieving all articles for a user.
        Creates multiple articles for a user and verifies they are all retrieved.
        """
        # Create several articles for the user
        article_count = 3
        article_ids = []

        for i in range(article_count):
            data = article_data.copy()
            data["title"] = f"User Article {i}"
            data["tags"] = [f"tag{i}", "common"]

            article_id = await self._create_article(
                async_client, test_user_id, data, auth_token
            )
            article_ids.append(article_id)

        # Get all articles for the user
        response = await async_client.get(f"{BASE_URL}user/{test_user_id}")

        # Verify successful retrieval
        assert response.status_code == 200
        response_data = response.json()

        # Verify all created articles are returned
        assert len(response_data) == article_count

        # Verify article IDs match what we created
        returned_ids = [article["id"] for article in response_data]
        for article_id in article_ids:
            assert article_id in returned_ids

    @pytest.mark.asyncio
    async def test_get_suggested_articles(
        self, async_client, test_user_id, article_data, auth_token
    ):
        """
        Test retrieving suggested articles.
        Creates articles and verifies the suggested endpoint returns articles.
        """
        # Create some articles first
        article_count = 5
        for i in range(article_count):
            data = article_data.copy()
            data["title"] = f"Suggested Article {i}"
            await self._create_article(async_client, test_user_id, data, auth_token)

        # Get suggested articles
        response = await async_client.get(f"{BASE_URL}suggested/?count=3")

        # Verify successful retrieval
        assert response.status_code == 200
        response_data = response.json()

        # Should have 3 articles as requested by count parameter
        assert len(response_data) <= 3

        # Verify each returned item has expected structure
        for article in response_data:
            assert "id" in article
            assert "title" in article
            assert "user_id" in article
            assert "tags" in article

    @pytest.mark.asyncio
    async def test_invalid_article_data(self, async_client, test_user_id, auth_token):
        """
        Test creating an article with invalid data.
        Verifies that API validates input correctly.
        """
        headers = {"Authorization": f"Bearer {auth_token}"}

        # Missing required fields
        invalid_data = {
            "user_id": test_user_id,
            # Missing title and content
        }

        response = await async_client.post(
            BASE_URL,
            json=invalid_data,
            headers=headers,
        )

        assert response.status_code == 422
        assert "detail" in response.json()

        # Title too long
        invalid_data = {
            "title": "x" * 300,  # Exceeds 255 character limit
            "content": "Valid content",
            "user_id": test_user_id,
        }

        response = await async_client.post(
            BASE_URL,
            json=invalid_data,
            headers=headers,
        )

        assert response.status_code == 422
        assert "detail" in response.json()
