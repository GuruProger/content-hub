from typing import Type

from fastapi import HTTPException, status, UploadFile
from sqlalchemy.ext.asyncio import AsyncSession

from core.models import User


async def get_user_by_id(session: AsyncSession, user_id: int) -> Type[User]:
    user = await session.get(User, user_id)
    if user is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found",
        )
    return user


async def process_avatar(avatar: UploadFile | None) -> bytes | None:
    if not avatar:
        return None
    try:
        return await avatar.read()
    finally:
        await avatar.close()
