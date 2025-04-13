import base64
from typing import Type

from fastapi import UploadFile
from sqlalchemy.ext.asyncio import AsyncSession

from api.auth.auth_utils import hash_password
from core.models import User
from core.models.user import AccountStatus
from core.schemas.user import UserCreateSchema, UserUpdateSchema
from utils.decorators import handle_db_errors
from utils.user_utils import process_avatar, get_user_by_id


@handle_db_errors
async def create_user(
    session: AsyncSession,
    user_create: UserCreateSchema,
    avatar: UploadFile | None = None,
) -> User:
    user_data = user_create.model_dump()
    user_data["password"] = hash_password(user_data["password"])
    user_data["avatar"] = await process_avatar(avatar)

    user = User(**user_data)
    session.add(user)
    await session.commit()
    await session.refresh(user)
    user.avatar = bool(user.avatar)
    return user


@handle_db_errors
async def get_user(session: AsyncSession, user_id: int) -> Type[User]:
    user = await get_user_by_id(session, user_id)
    if user.avatar:
        user.avatar = base64.b64encode(user.avatar).decode("utf-8")
    return user


@handle_db_errors
async def update_user(
    session: AsyncSession,
    user_id: int,
    user_update: UserUpdateSchema,
    avatar: UploadFile | None = None,
) -> Type[User]:
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


@handle_db_errors
async def delete_user(session: AsyncSession, user_id: int) -> None:
    user = await get_user_by_id(session, user_id)
    user.status = AccountStatus.DELETED
    await session.commit()
