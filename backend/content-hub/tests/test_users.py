from pathlib import Path
from uuid import uuid4

import pytest
import pytest_asyncio

from core.schemas.user import UserReadSchema
from .conftest import async_client

from core.models import User
from api.auth.auth_config import get_current_auth_user
from api.auth import auth_utils
from main import app

BASE_URL = "/api/v1/users/"


@pytest_asyncio.fixture(scope="function")
async def user_data():
    """Generate random user data for testing purposes."""
    return {
        "username": f"test_user_{uuid4().hex[:8]}",
        "email": f"test_{uuid4().hex[:8]}@example.com",
        "bio": "Test bio",
        "password": "test_password123",
    }


@pytest_asyncio.fixture(scope="function")
async def avatar_file():
    """Provide a test avatar file from the test_data directory."""
    avatar_path = Path(__file__).parent / "test_data" / "avatar.jpg"
    assert avatar_path.exists(), f"Test avatar file not found at {avatar_path}"
    return avatar_path

async def _login_user(async_client, username: str, password: str) -> str:
    response = await async_client.post("/jwt/login/", data={"username": username, "password": password})
    assert response.status_code == 200, f"Login failed: {response.text}"
    return response.json()["access_token"]



class TestUserAPI:
    """
    Test suite for User API endpoints.

    This class contains tests for all CRUD operations on user resources,
    including creation, retrieval, updating, and deletion of users.
    It also includes tests for edge cases like duplicate users, missing fields,
    and non-existent user operations.
    """

    @staticmethod
    async def _create_user(async_client, user_data):
        """Get id of the newly created user (for further tests)"""
        response = await async_client.post(
            BASE_URL,
            data={
                "username": user_data["username"],
                "email": user_data["email"],
                "password": user_data["password"],
            },
        )
        return response.json()["id"]

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
    async def test_create_duplicate_user(self, async_client, user_data):
        """
        Attempt to create two users with the same username and email.
        The first user should be created successfully, and the second should trigger a validation error.
        """

        # First, create the initial user
        response = await async_client.post(
            BASE_URL,
            files=[
                ("username", (None, user_data["username"])),
                ("email", (None, user_data["email"])),
                ("password", (None, user_data["password"])),
            ],
        )
        assert response.status_code == 201

        # Then, try to create a second user with the same data
        duplicate_response = await async_client.post(
            BASE_URL,
            files=[
                ("username", (None, user_data["username"])),
                ("email", (None, user_data["email"])),
                ("password", (None, user_data["password"])),
            ],
        )

        assert duplicate_response.status_code == 409
        assert "detail" in duplicate_response.json()

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
        user_id = await self._create_user(async_client, user_data)

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
    async def test_update_user_text_fields(self, async_client, user_data: dict, avatar_file):
        """
        Test updating user's text fields (username, email, bio, password).
        """
        user_id = await self._create_user(async_client, user_data)
        token = await _login_user(async_client, user_data["username"], user_data["password"])
        headers = {"Authorization": f"Bearer {token}"}

        new_data = {
            "username": "updated_username",
            "email": "updated_email@example.com",
            "bio": "Updated bio content",
            "password": "new_secure_password1",
        }

        response = await async_client.patch(
            f"{BASE_URL}{user_id}",
            data=new_data,
            headers=headers,
        )

        assert response.status_code == 200, f"Response: {response.text}"
        response_data = response.json()
        assert response_data["username"] == new_data["username"]
        assert response_data["email"] == new_data["email"]
        assert response_data["bio"] == new_data["bio"]

    @pytest.mark.asyncio
    async def test_update_user_avatar(self, async_client, user_data: dict, avatar_file):
        """
        Test updating only the user's avatar.
        """
        user_id = await self._create_user(async_client, user_data)
        token = await _login_user(async_client, user_data["username"], user_data["password"])
        headers = {"Authorization": f"Bearer {token}"}

        with open(avatar_file, "rb") as new_avatar:
            response = await async_client.patch(
                f"{BASE_URL}{user_id}",
                files=[("avatar", (avatar_file.name, new_avatar, "image/jpg"))],
                headers=headers,
            )

        assert response.status_code == 200, f"Response: {response.text}"
        response_data = response.json()
        assert response_data.get("avatar") is True

    @pytest.mark.asyncio
    async def test_update_user_with_avatar_and_text(self, async_client, user_data: dict, avatar_file):
        """
        Test updating both text fields and avatar at the same time.
        """
        user_id = await self._create_user(async_client, user_data)
        token = await _login_user(async_client, user_data["username"], user_data["password"])
        headers = {"Authorization": f"Bearer {token}"}

        with open(avatar_file, "rb") as avatar:
            response = await async_client.patch(
                f"{BASE_URL}{user_id}",
                files=[
                    ("username", (None, "combo_update_user")),
                    ("bio", (None, "Bio has changed")),
                    ("avatar", (avatar_file.name, avatar, "image/jpg")),
                ],
                headers=headers,
            )

        assert response.status_code == 200, f"Response: {response.text}"
        response_data = response.json()
        assert response_data["username"] == "combo_update_user"
        assert response_data["bio"] == "Bio has changed"
        assert response_data.get("avatar") is True

    @pytest.mark.asyncio
    async def test_update_nonexistent_user(self, async_client, avatar_file):
        """
        Test updating a non-existent user — should return 404.
        """
        nonexistent_id = 1234567

        fake_user = User(id=nonexistent_id, username="ghost_user", email="ghost@example.com")

        async def fake_get_current_auth_user():
            return fake_user

        app.dependency_overrides[get_current_auth_user] = fake_get_current_auth_user

        original = {}
        original["decode_jwt"] = auth_utils.decode_jwt
        auth_utils.decode_jwt = lambda token: {
            "sub": "ghost_user",
            "username": "ghost_user",
            "email": "ghost@example.com"
        }

        try:
            response = await async_client.patch(
                f"{BASE_URL}{nonexistent_id}",
                data={"username": "ghost_update"},
                headers={"Authorization": "Bearer du.ra.chok"},
            )
        finally:
            auth_utils.decode_jwt = original["decode_jwt"]
            app.dependency_overrides.pop(get_current_auth_user, None)
        assert response.status_code == 404, f"Response: {response.text}"

    @pytest.mark.asyncio
    async def test_update_user_invalid_password(self, async_client, user_data: dict, avatar_file):
        """
        Test updating with an invalid password (too short).
        """
        user_id = await self._create_user(async_client, user_data)
        token = await _login_user(async_client, user_data["username"], user_data["password"])
        headers = {"Authorization": f"Bearer {token}"}

        response = await async_client.patch(
            f"{BASE_URL}{user_id}",
            data={"password": "short"},
            headers=headers,
        )

        assert response.status_code == 422, f"Response: {response.text}"

    @pytest.mark.asyncio
    async def test_delete_user(self, async_client, user_data: dict, avatar_file):
        """
        Test deleting a user.
        """
        user_id = await self._create_user(async_client, user_data)
        token = await _login_user(async_client, user_data["username"], user_data["password"])
        headers = {"Authorization": f"Bearer {token}"}

        delete_response = await async_client.delete(
            f"{BASE_URL}{user_id}",
            headers=headers,
        )
        assert delete_response.status_code == 204, f"Response: {delete_response.text}"

        get_response = await async_client.get(f"{BASE_URL}{user_id}", headers=headers)
        assert get_response.status_code == 200, f"Response: {get_response.text}"
        assert get_response.json().get("status") == "deleted"
