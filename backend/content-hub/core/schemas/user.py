from datetime import datetime

from pydantic import BaseModel, Field, EmailStr

from core.models.user import AccountStatus


class UserBaseSchema(BaseModel):
    """Base schema for User, containing common fields."""

    username: str = Field(..., max_length=50)
    email: EmailStr = Field(None)
    bio: str | None = Field(None, max_length=1000)


class UserCreateSchema(UserBaseSchema):
    """Schema for creating a new user."""

    avatar: bytes | None = Field(None)
    password: str = Field(..., min_length=8, max_length=30)


class UserUpdateSchema(BaseModel):
    """Schema for updating user information. All fields are optional."""

    username: str | None = Field(None, max_length=50)
    email: EmailStr | None = Field(None)
    bio: str | None = Field(None, max_length=1000)
    avatar: bytes | None = Field(None)
    password: str | None = Field(None, min_length=8, max_length=30)


class UserReadSchema(UserBaseSchema):
    """Schema for reading user information, includes additional fields."""

    id: int
    created_at: datetime
    rating: int
    is_admin: bool
    avatar: bytes | bool | None
    status: AccountStatus

    class Config:
        from_attributes = True
