import base64
from typing import Type

from fastapi import UploadFile
from sqlalchemy.ext.asyncio import AsyncSession

from api.auth.auth_utils import hash_password
from core.models import User
from core.models.user import AccountStatus
from core.schemas.user import UserCreateSchema, UserUpdateSchema
from utils.decorators import user_error_handler
from utils.user_utils import process_avatar, get_user_by_id


@user_error_handler
async def create_user(
    session: AsyncSession,
    user_create: UserCreateSchema,
    avatar: UploadFile | None = None,
) -> User:
    """
    Creates a new user in the database with optional avatar upload.

    This function handles the complete user creation process including:
    - Password hashing for security
    - Avatar image processing and storage
    - Database transaction management

    Args:
        session: Async database session for operations.
        user_create: Validated user creation data.
        avatar: Optional uploaded avatar file (default None).

    Returns:
        User: The newly created user object with avatar presence flag.

    Note:
        The avatar is stored as binary data in the database but returned
        as a boolean flag indicating presence/absence.
    """
    user_data = user_create.model_dump()
    user_data["password"] = hash_password(user_data["password"])
    user_data["avatar"] = await process_avatar(avatar)

    user = User(**user_data)
    session.add(user)
    await session.commit()
    await session.refresh(user)
    user.avatar = bool(user.avatar)
    return user


@user_error_handler
async def get_user(session: AsyncSession, user_id: int) -> Type[User]:
    """
    Retrieves a user by their unique identifier with avatar handling.

    This function fetches a complete user profile and processes the avatar:
    - Converts binary avatar data to base64 string when present
    - Maintains None for absent avatars

    Args:
        session: Async database session for operations.
        user_id: Unique identifier of the target user.

    Returns:
        User: The requested user object with processed avatar data.

    Note:
        The avatar is returned as base64-encoded string when present,
        making it ready for API responses.
    """
    user = await get_user_by_id(session, user_id)
    if user.avatar:
        user.avatar = base64.b64encode(user.avatar).decode("utf-8")
    return user


@user_error_handler
async def update_user(
    session: AsyncSession,
    user_id: int,
    user_update: UserUpdateSchema,
    avatar: UploadFile | None = None,
) -> Type[User]:
    """
    Updates an existing user's profile information with partial updates.

    This function supports flexible profile updates including:
    - Partial field updates (only changed fields)
    - Optional password change with automatic hashing
    - Optional avatar replacement
    - Atomic transaction handling

    Args:
        session: Async database session for operations.
        user_id: Unique identifier of the target user.
        user_update: Validated update data (partial fields supported).
        avatar: Optional new avatar file to replace existing (default None).

    Returns:
        User: The updated user object with avatar presence flag.

    Note:
        Password updates trigger automatic hashing before storage.
        Avatar updates completely replace any existing avatar.
    """
    user = await get_user_by_id(session, user_id)
    update_data = user_update.model_dump(exclude_unset=True)

    if "password" in update_data and update_data["password"]:
        update_data["password"] = hash_password(update_data["password"])

    if avatar:
        update_data["avatar"] = await process_avatar(avatar)

    for field, value in update_data.items():
        if value is not None:
            setattr(user, field, value)

    await session.commit()
    await session.refresh(user)
    user.avatar = bool(user.avatar)
    return user


@user_error_handler
async def delete_user(session: AsyncSession, user_id: int) -> None:
    """
    Performs a soft-delete operation on the specified user account.

    Instead of physical deletion, this function:
    - Marks the account status as DELETED
    - Preserves all user data for potential recovery
    - Maintains referential integrity

    Args:
        session: Async database session for operations.
        user_id: Unique identifier of the target user.

    Returns:
        None: Confirms successful account deactivation.

    Note:
        This implementation follows the soft-delete pattern for data preservation.
        Actual data removal would require a separate purge mechanism.
    """
    user = await get_user_by_id(session, user_id)
    user.status = AccountStatus.DELETED
    await session.commit()
