from typing import Annotated

from fastapi import Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from api.auth import utils as auth_utils
from api.auth.crud import get_user
from core.models.mixins.user import User
from core.models.db_helper import session_getter
from api.auth.schemas import UserCreateInput




async def validate_auth_user(
    user_login: UserCreateInput,
    session: Annotated[AsyncSession, Depends(session_getter)],
) -> User:
    unauthenticated_exception = HTTPException(
        status_code=status.HTTP_400_BAD_REQUEST,
        detail="invalid username or password",
    )
    user = await get_user(user_login.email, session)
    _verify_user(
        user=user,
        user_password=user_login.password,
        custom_exception=unauthenticated_exception,
    )
    return user


def _verify_user(
    user: User,
    user_password: str | bytes,
    custom_exception: HTTPException,
) -> None:
    if not user:
        raise custom_exception
    if not auth_utils.validate_password(
        password=user_password,
        hashed_password=user.hashed_password,
    ):
        raise custom_exception
    if not user.is_active:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="user inactive",
        ) from None


