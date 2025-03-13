from typing import Type

from fastapi import HTTPException, status

from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.ext.asyncio import AsyncSession

from core.models import User
from core.schemas.user import UserCreate, UserUpdate


async def create_user(
    session: AsyncSession,
    user_create: UserCreate,
) -> User:
    """
    Create a new user in the database.

    :param session: AsyncSession for database interaction
    :type session: AsyncSession
    :param user_create: User creation data
    :type user_create: UserCreate

    :return: The created user
    :rtype: User

    :raises HTTPException: If a database error occurs
    """
    try:
        # Convert the UserCreate Pydantic model to a dictionary
        user_data = user_create.model_dump()

        # Extract the password from the user data
        password = user_data.pop("password")

        hashed_password = password  # Replace with real hashing

        # Add the hashed password to the user data with the correct field name
        user_data["password_hash"] = hashed_password

        # Create a User instance using the modified user data
        user = User(**user_data)

        # Add the user to the session and commit the transaction
        session.add(user)
        await session.commit()
        await session.refresh(user)

        # Return the created user
        return user

    except SQLAlchemyError as e:
        await session.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Database error",
        )


async def get_user(
    session: AsyncSession,
    user_id: int,
) -> Type[User]:
    """
    Retrieve a user by their ID.

    :param session: AsyncSession for database interaction
    :type session: AsyncSession
    :param user_id: The ID of the user to retrieve
    :type user_id: int

    :return: The retrieved user
    :rtype: User

    :raises HTTPException: If the user is not found or a database error occurs
    """
    try:
        # Attempt to retrieve the user by ID
        user = await session.get(User, user_id)
        if user is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="User not found",
            )
        return user
    except SQLAlchemyError as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Database error",
        )


async def update_user(
    session: AsyncSession,
    user_id: int,
    user_update: UserUpdate,
) -> Type[User]:
    """
    Update an existing user's data.

    :param session: AsyncSession for database interaction
    :type session: AsyncSession
    :param user_id: The ID of the user to update
    :type user_id: int
    :param user_update: The data to update the user with
    :type user_update: UserUpdate

    :return: The updated user
    :rtype: User

    :raises HTTPException: If the user is not found or a database error occurs
    """
    try:
        # Get existing user data
        user = await session.get(User, user_id)
        if user is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="User not found",
            )

        # Convert update data to dict and handle password
        update_data = user_update.model_dump(exclude_unset=True)

        if "password" in update_data:
            password = update_data.pop("password")
            user.password_hash = password  # Replace with real hashing

        # Update fields
        for field, value in update_data.items():
            setattr(user, field, value)

        await session.commit()
        await session.refresh(user)
        return user

    except SQLAlchemyError as e:
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

    :param session: AsyncSession for database interaction
    :type session: AsyncSession
    :param user_id: The ID of the user to delete
    :type user_id: int

    :return: None

    :raises HTTPException: If the user is not found or a database error occurs
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

    except SQLAlchemyError as e:
        await session.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Database error",
        )
