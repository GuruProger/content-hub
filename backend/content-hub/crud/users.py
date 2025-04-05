import base64
from typing import Type

from fastapi import HTTPException, status, UploadFile
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.ext.asyncio import AsyncSession

from api.auth.auth_utils import hash_password
from core.models import User
from core.schemas.user import UserCreateSchema, UserUpdateSchema


async def create_user(
    session: AsyncSession,
    user_create: UserCreateSchema,
    avatar: UploadFile | None = None,
) -> User:
    """
    Create a new user in the database.

    Args:
            session (AsyncSession): AsyncSession for database interaction.
            user_create (UserCreateSchema): User creation data.
            avatar (UploadFile | None): Avatar file (optional).

    Returns:
            User: The created user.

    Raises:
            HTTPException: If a database error occurs.
    """
    try:
        # Extract user data and hash password
        user_data = user_create.model_dump()
        user_data["password"] = hash_password(user_data["password"])

        # If an avatar is provided, read its contents
        if avatar:
            contents = await avatar.read()
            user_data["avatar"] = contents

        # Create a new user object and add it to the session
        user = User(**user_data)
        session.add(user)
        await session.commit()
        await session.refresh(user)

        # Return the user with avatar presence as a boolean
        user.avatar = bool(user.avatar)
        return user
    except SQLAlchemyError:
        await session.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Database error"
        )


async def get_user(
    session: AsyncSession,
    user_id: int,
) -> Type[User]:
    """
    Retrieve a user by their ID.

    Args:
            session (AsyncSession): AsyncSession for database interaction.
            user_id (int): The ID of the user to retrieve.

    Returns:
            User: The retrieved user.

    Raises:
            HTTPException: If the user is not found or a database error occurs.
    """
    try:
        # Fetch user from database
        user = await session.get(User, user_id)

        if user is None:
            raise HTTPException(status_code=404, detail="User or avatar not found")

        # Encode avatar if available
        if user.avatar:
            user.avatar = base64.b64encode(user.avatar).decode("utf-8")

        return user
    except SQLAlchemyError:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Database error",
        )


async def update_user(
    session: AsyncSession,
    user_id: int,
    user_update: UserUpdateSchema,
    avatar: UploadFile | None = None,
) -> Type[User]:
    """
    Update an existing user's data.

    Args:
            session (AsyncSession): AsyncSession for database interaction.
            user_id (int): The ID of the user to update.
            user_update (UserUpdateSchema): The data to update the user with.
            avatar (UploadFile | None): Avatar file to update (optional).

    Returns:
            User: The updated user.

    Raises:
            HTTPException: If the user is not found or a database error occurs.
    """
    try:
        # Fetch user to update
        user = await session.get(User, user_id)
        if user is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND, detail="User not found"
            )

        # Extract update data, excluding unset values
        update_data = user_update.model_dump(exclude_unset=True)

        # Hash password if provided in update
        if "password" in update_data and update_data["password"]:
            update_data["password"] = hash_password(update_data["password"])

        # If an avatar is provided, read its contents
        if avatar:
            try:
                contents = await avatar.read()
                update_data["avatar"] = contents
            finally:
                await avatar.close()

        # Apply updates to the user object
        for field, value in update_data.items():
            if value is not None:
                setattr(user, field, value)

        await session.commit()
        await session.refresh(user)

        # Return the updated user with avatar presence as a boolean
        user.avatar = bool(user.avatar)
        return user
    except SQLAlchemyError:
        await session.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Database error",
        )


async def delete_user(
    session: AsyncSession,
    user_id: int,
) -> None:
    """
    Delete a user by their ID.

    Args:
            session (AsyncSession): AsyncSession for database interaction.
            user_id (int): The ID of the user to delete.

    Returns:
            None: No return value.

    Raises:
            HTTPException: If the user is not found or a database error occurs.
    """
    try:
        # Retrieve the user to be deleted
        user = await session.get(User, user_id)
        if user is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="User not found",
            )

        # Delete the user and commit the transaction
        await session.delete(user)
        await session.commit()
        return None
    except SQLAlchemyError:
        await session.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Database error",
        )
