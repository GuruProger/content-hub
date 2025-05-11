from uuid import uuid4
from datetime import datetime, timedelta

import pytest
import pytest_asyncio

BASE_URL = "/api/v1/articles/"  # Base URL for article API endpoints


@pytest_asyncio.fixture(scope="function")
async def test_user_id(async_client):
    """Create a test user and return the user ID."""
    user_data = {
        "username": f"test_user_{uuid4().hex[:8]}",
        "email": f"test_{uuid4().hex[:8]}@example.com",
        "password": "test_password123",
    }

    response = await async_client.post(
        "/api/v1/users/",
        data=user_data,
    )
    assert response.status_code == 201
    return response.json()["id"]


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
    async def _create_article(async_client, user_id, article_data):
        """Helper method to create an article and return its ID."""
        create_data = article_data.copy()
        create_data["user_id"] = user_id

        response = await async_client.post(
            BASE_URL,
            json=create_data,
        )
        assert response.status_code == 201
        return response.json()["id"]

    @pytest.mark.asyncio
    async def test_create_article(self, async_client, test_user_id, article_data):
        """
        Test creating an article.
        Verifies that the article is created successfully with all fields.
        """
        # Prepare article data with user ID
        create_data = article_data.copy()
        create_data["user_id"] = test_user_id

        # Send POST request to create article
        response = await async_client.post(
            BASE_URL,
            json=create_data,
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
    async def test_get_article(self, async_client, test_user_id, article_data):
        """
        Test retrieving an article by ID.
        Creates an article and then verifies it can be retrieved with correct data.
        """
        # First create an article
        article_id = await self._create_article(
            async_client, test_user_id, article_data
        )

        # Then retrieve it
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
    async def test_update_article(self, async_client, test_user_id, article_data):
        """
        Test updating an article.
        Creates an article, updates it, and verifies the changes.
        """
        # First create an article
        article_id = await self._create_article(
            async_client, test_user_id, article_data
        )

        # Prepare update data
        update_data = {
            "title": "Updated Article Title",
            "content": "This content has been updated",
            "is_published": False,
            "tags": ["updated", "tags"],
        }

        # Send update request
        response = await async_client.patch(
            f"{BASE_URL}{article_id}",
            json=update_data,
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
    async def test_update_nonexistent_article(self, async_client):
        """
        Test updating a non-existent article.
        Verifies the API returns a 404 error.
        """
        nonexistent_id = 99999
        update_data = {"title": "Update Non-existent Article"}

        response = await async_client.patch(
            f"{BASE_URL}{nonexistent_id}",
            json=update_data,
        )

        assert response.status_code == 404
        assert "detail" in response.json()

    @pytest.mark.asyncio
    async def test_delete_article(self, async_client, test_user_id, article_data):
        """
        Test deleting an article.
        Creates an article, deletes it, and verifies it cannot be retrieved afterward.
        """
        # First create an article
        article_id = await self._create_article(
            async_client, test_user_id, article_data
        )

        # Delete the article
        response = await async_client.delete(f"{BASE_URL}{article_id}")
        assert response.status_code == 204

        # Try to get the deleted article
        get_response = await async_client.get(f"{BASE_URL}{article_id}")
        assert get_response.status_code == 404

    @pytest.mark.asyncio
    async def test_delete_nonexistent_article(self, async_client):
        """
        Test deleting a non-existent article.
        Verifies the API returns a 404 error.
        """
        nonexistent_id = 99999
        response = await async_client.delete(f"{BASE_URL}{nonexistent_id}")

        assert response.status_code == 404
        assert "detail" in response.json()

    @pytest.mark.asyncio
    async def test_get_user_articles(self, async_client, test_user_id, article_data):
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

            article_id = await self._create_article(async_client, test_user_id, data)
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
        self, async_client, test_user_id, article_data
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
            await self._create_article(async_client, test_user_id, data)

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
    async def test_invalid_article_data(self, async_client, test_user_id):
        """
        Test creating an article with invalid data.
        Verifies that API validates input correctly.
        """
        # Missing required fields
        invalid_data = {
            "user_id": test_user_id,
            # Missing title and content
        }

        response = await async_client.post(
            BASE_URL,
            json=invalid_data,
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
        )

        assert response.status_code == 422
        assert "detail" in response.json()

    @pytest.mark.asyncio
    async def test_suggested_articles_with_filters(
        self, async_client, test_user_id, article_data
    ):
        """
        Test retrieving suggested articles with tag and date filters.
        """
        # Create articles with different tags and dates
        for i in range(3):
            data = article_data.copy()
            data["title"] = f"Programming Article {i}"
            data["tags"] = (
                ["programming", "python"]
                if i % 2 == 0
                else ["programming", "javascript"]
            )
            await self._create_article(async_client, test_user_id, data)

        # Get today's date in yyyy-mm-dd format
        today = datetime.now().strftime("%Y-%m-%d")
        yesterday = (datetime.now() - timedelta(days=1)).strftime("%Y-%m-%d")

        # Test with tag filter
        response = await async_client.get(f"{BASE_URL}suggested/?tags=python")
        assert response.status_code == 200
        python_articles = response.json()

        # All returned articles should have python tag
        for article in python_articles:
            tag_names = [tag["name"] for tag in article["tags"]]
            assert "python" in tag_names

        # Test with date filter
        response = await async_client.get(
            f"{BASE_URL}suggested/?start_date={yesterday}&end_date={today}"
        )
        assert response.status_code == 200
        date_filtered_articles = response.json()

        # Should return articles created between yesterday and today
        assert len(date_filtered_articles) > 0

        # Test with both tag and date filters
        response = await async_client.get(
            f"{BASE_URL}suggested/?tags=programming&start_date={yesterday}&end_date={today}"
        )
        assert response.status_code == 200
        filtered_articles = response.json()

        # All returned articles should have programming tag and be created between dates
        for article in filtered_articles:
            tag_names = [tag["name"] for tag in article["tags"]]
            assert "programming" in tag_names

    @pytest.mark.asyncio
    async def test_suggested_articles_invalid_date_format(self, async_client):
        """
        Test handling of invalid date formats in suggested articles endpoint.
        """
        # Test invalid date format
        response = await async_client.get(f"{BASE_URL}suggested/?start_date=01.01.2023")
        assert response.status_code == 422  # Unprocessable Entity

        response = await async_client.get(f"{BASE_URL}suggested/?end_date=01/01/2023")
        assert response.status_code == 422  # Unprocessable Entity

        # Test valid format
        today = datetime.now().strftime("%Y-%m-%d")
        response = await async_client.get(f"{BASE_URL}suggested/?start_date={today}")
        assert response.status_code == 200  # Should work with valid format
