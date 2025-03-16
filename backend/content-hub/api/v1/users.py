from typing import Annotated, Type

from fastapi import APIRouter, Depends, status
from sqlalchemy.ext.asyncio import AsyncSession

from core.models import User, db_helper
from core.schemas.user import UserCreate, UserRead, UserUpdate
from crud import users as users_crud

router = APIRouter(tags=["Users"])


@router.post("/", response_model=UserRead, status_code=status.HTTP_201_CREATED)
async def create_user_endpoint(
    session: Annotated[AsyncSession, Depends(db_helper.session_getter)],
    user_create: UserCreate,
) -> User:
    user = await users_crud.create_user(
        session=session,
        user_create=user_create,
    )
    return user


@router.get("/{user_id}", response_model=UserRead)
async def get_user_endpoint(
    user_id: int,
    session: Annotated[AsyncSession, Depends(db_helper.session_getter)],
) -> Type[User]:
    user = await users_crud.get_user(
        session=session,
        user_id=user_id,
    )
    return user


@router.patch("/{user_id}", response_model=UserRead)
async def update_user_endpoint(
    user_id: int,
    user_update: UserUpdate,
    session: Annotated[AsyncSession, Depends(db_helper.session_getter)],
) -> Type[User]:
    user = await users_crud.update_user(
        session=session,
        user_id=user_id,
        user_update=user_update,
    )
    return user


@router.delete("/{user_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_user_endpoint(
    user_id: int,
    session: Annotated[AsyncSession, Depends(db_helper.session_getter)],
) -> None:
    user = await users_crud.delete_user(
        session=session,
        user_id=user_id,
    )
    return None
