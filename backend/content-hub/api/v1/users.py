from typing import Annotated, Type

from fastapi import APIRouter, Depends, status, UploadFile, Form, HTTPException
from pydantic import EmailStr
from sqlalchemy.ext.asyncio import AsyncSession
from starlette.responses import Response

from core.models import User, db_helper
from core.schemas.user import UserCreateSchema, UserReadSchema, UserUpdateSchema
from crud import users as users_crud

router = APIRouter(tags=["Users"])


@router.post("/", response_model=UserReadSchema, status_code=status.HTTP_201_CREATED)
async def create_user_endpoint(
    session: Annotated[AsyncSession, Depends(db_helper.session_getter)],
    username: str = Form(..., max_length=50),
    email: EmailStr = Form(...),
    bio: str | None = Form(None, max_length=1000),
    password: str = Form(..., min_length=8, max_length=30),
    avatar: UploadFile | None = None,
) -> User | str:

    return await users_crud.create_user(
        session=session,
        user_create=UserCreateSchema(
            username=username, email=email, bio=bio, password=password
        ),
        avatar=avatar,
    )


@router.get("/{user_id}", response_model=UserReadSchema)
async def get_user_endpoint(
    user_id: int,
    session: Annotated[AsyncSession, Depends(db_helper.session_getter)],
) -> Type[User]:
    return await users_crud.get_user(
        session=session,
        user_id=user_id,
    )


@router.patch("/{user_id}", response_model=UserReadSchema)
async def update_user_endpoint(
    session: Annotated[AsyncSession, Depends(db_helper.session_getter)],
    user_id: int,
    username: str | None = Form(None, max_length=50),
    email: EmailStr | None = Form(None),
    bio: str | None = Form(None, max_length=1000),
    password: str | None = Form(None, min_length=8, max_length=30),
    avatar: UploadFile | None = None,
) -> Type[User]:
    return await users_crud.update_user(
        session=session,
        user_id=user_id,
        user_update=UserUpdateSchema(
            username=username,
            email=email,
            bio=bio,
            password=password,
        ),
        avatar=avatar,
    )


@router.delete("/{user_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_user_endpoint(
    user_id: int,
    session: Annotated[AsyncSession, Depends(db_helper.session_getter)],
) -> None:
    await users_crud.delete_user(
        session=session,
        user_id=user_id,
    )
    return None
