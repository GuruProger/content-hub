from pathlib import Path
from uuid import uuid4

import pytest
from core.models.db_helper import db_helper
from core.schemas.user import UserReadSchema
from .conftest import async_client

BASE_URL = "/api/v1/users/"  # Base URL for user API endpoints


# Fixture to generate random user data for testing
@pytest.fixture
def user_data():
    return {
        "username": f"test_user_{uuid4().hex[:8]}",
        "email": f"test_{uuid4().hex[:8]}@example.com",
        "bio": "Test bio",
        "password": "test_password123",
    }


# Fixture to provide an avatar file for testing
@pytest.fixture
def avatar_file():
    avatar_path = Path(__file__).parent / "test_data" / "avatar.jpg"
    assert avatar_path.exists(), f"Test avatar file not found at {avatar_path}"
    return avatar_path


# Test class for User API endpoints
class TestUserAPI:
    @pytest.mark.asyncio
    async def test_create_user_with_avatar(self, async_client, user_data, avatar_file):
        """
        Test creating a user with an avatar file.
        Verifies that the user is created successfully with all fields including avatar.
        """
        # Open the avatar file in binary mode
        with open(avatar_file, "rb") as avatar:
            # Send POST request with user data and avatar file
            response = await async_client.post(
                BASE_URL,
                files=[
                    ("username", (None, user_data["username"])),
                    ("email", (None, user_data["email"])),
                    ("bio", (None, user_data["bio"])),
                    ("password", (None, user_data["password"])),
                    ("avatar", (avatar_file.name, avatar, "image/jpg")),
                ],
            )
        assert response.status_code == 201

        response_data = response.json()
        user_schema = UserReadSchema(**response_data)

        # Assert all fields match expected values
        assert user_schema.username == user_data["username"]
        assert user_schema.email == user_data["email"]
        assert user_schema.bio == user_data["bio"]
        assert user_schema.rating == 0  # Default rating should be 0
        assert user_schema.is_admin is False  # New user shouldn't be admin
        assert user_schema.avatar is True  # Avatar should be present

        return response_data["id"]  # Return the created user ID for use in other tests

    @pytest.mark.asyncio
    @pytest.mark.parametrize("missing_field", ["username", "email", "password"])
    async def test_create_user_missing_required_field(
        self, async_client, user_data, missing_field
    ):
        """
        Test creating a user with missing required fields.
        Uses parametrize to test each required field separately.
        Verifies that the API returns a 422 error for missing required fields.
        """
        # Create copy of user data and remove the field being tested
        test_data = user_data.copy()
        del test_data[missing_field]

        # Send POST request with incomplete data
        response = await async_client.post(
            BASE_URL,
            data=test_data,
        )
        # Verify validation error is returned
        assert response.status_code == 422
        assert "detail" in response.json()  # Error details should be present

    @pytest.mark.asyncio
    async def test_get_existing_user(self, async_client, user_data, avatar_file):
        """
        Test retrieving an existing user by ID.
        Verifies that the returned user data matches what was created.
        """

        # First create a user to test with
        user_id = await self.test_create_user_with_avatar(
            async_client, user_data, avatar_file
        )

        # Send GET request for the created user
        response = await async_client.get(f"{BASE_URL}{user_id}")
        assert response.status_code == 200

        # Verify response data matches created user
        response_data = response.json()
        assert response_data["id"] == user_id
        assert response_data["username"] == user_data["username"]
        assert response_data["email"] == user_data["email"]

    @pytest.mark.asyncio
    async def test_get_nonexistent_user(self, async_client):
        """
        Test retrieving a non-existent user.
        Verifies that the API returns a 404 error.
        """

        # Use an ID that shouldn't exist
        nonexistent_id = 99999
        response = await async_client.get(f"{BASE_URL}{nonexistent_id}")
        assert response.status_code == 404
        assert "detail" in response.json()  # Error detail should be present

    @pytest.mark.asyncio
    async def test_update_user_text_fields(self, async_client, user_data, avatar_file):
        """
        Test updating user's text fields (username, email, bio, password).
        """
        # First, create a user
        user_id = await self.test_create_user_with_avatar(
            async_client, user_data, avatar_file
        )

        new_data = {
            "username": "updated_username",
            "email": "updated_email@example.com",
            "bio": "Updated bio content",
            "password": "new_secure_password1",
        }

        response = await async_client.patch(
            f"{BASE_URL}{user_id}",
            data=new_data,
        )

        assert response.status_code == 200
        response_data = response.json()
        assert response_data["username"] == new_data["username"]
        assert response_data["email"] == new_data["email"]
        assert response_data["bio"] == new_data["bio"]

    @pytest.mark.asyncio
    async def test_update_user_avatar(self, async_client, user_data, avatar_file):
        """
        Test updating only the user's avatar.
        """
        user_id = await self.test_create_user_with_avatar(
            async_client, user_data, avatar_file
        )

        with open(avatar_file, "rb") as new_avatar:
            response = await async_client.patch(
                f"{BASE_URL}{user_id}",
                files=[("avatar", (avatar_file.name, new_avatar, "image/jpg"))],
            )

        assert response.status_code == 200
        response_data = response.json()
        assert response_data["avatar"] is True

    @pytest.mark.asyncio
    async def test_update_user_with_avatar_and_text(
        self, async_client, user_data, avatar_file
    ):
        """
        Test updating both text fields and avatar at the same time.
        """
        user_id = await self.test_create_user_with_avatar(
            async_client, user_data, avatar_file
        )

        with open(avatar_file, "rb") as avatar:
            response = await async_client.patch(
                f"{BASE_URL}{user_id}",
                files=[
                    ("username", (None, "combo_update_user")),
                    ("bio", (None, "Bio has changed")),
                    ("avatar", (avatar_file.name, avatar, "image/jpg")),
                ],
            )

        assert response.status_code == 200
        response_data = response.json()
        assert response_data["username"] == "combo_update_user"
        assert response_data["bio"] == "Bio has changed"
        assert response_data["avatar"] is True

    @pytest.mark.asyncio
    async def test_update_nonexistent_user(self, async_client, avatar_file):
        """
        Test updating a non-existent user — should return 404.
        """
        nonexistent_id = 1234567

        response = await async_client.patch(
            f"{BASE_URL}{nonexistent_id}",
            data={"username": "ghost_user"},
        )

        assert response.status_code == 404
        assert "detail" in response.json()

    @pytest.mark.asyncio
    async def test_update_user_invalid_password(
        self, async_client, user_data, avatar_file
    ):
        """
        Test updating with an invalid password (too short).
        """
        user_id = await self.test_create_user_with_avatar(
            async_client, user_data, avatar_file
        )

        # Invalid password (less than 8 characters)
        response = await async_client.patch(
            f"{BASE_URL}{user_id}",
            data={"password": "short"},
        )

        assert response.status_code == 422  # Validation error
        assert "detail" in response.json()

        # Неверный пароль (меньше 8 символов)
        response = await async_client.patch(
            f"{BASE_URL}{user_id}",
            data={"password": "short"},
        )

        assert response.status_code == 422
        assert "detail" in response.json()
