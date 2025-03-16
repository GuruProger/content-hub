from datetime import datetime

from pydantic import BaseModel, Field, EmailStr
from typing import Optional

from core.models.user import UserRole


class UserBase(BaseModel):
    """Base model for User, containing common fields."""

    username: str = Field(max_length=25)
    email: EmailStr
    bio: Optional[str] = Field(None, max_length=1000)
    avatar_url: Optional[str] = Field(None)


class UserCreate(UserBase):
    """Model for creating a new user, includes password."""

    password: str = Field(min_length=8, max_length=30)


class UserUpdate(BaseModel):
    """Model for updating user information. All fields are optional."""

    username: Optional[str] = Field(None, max_length=25)
    email: Optional[EmailStr] = Field(None)
    bio: Optional[str] = Field(None, max_length=1000)
    avatar_url: Optional[str] = Field(None)
    password: Optional[str] = Field(None, min_length=8, max_length=30)


class UserRead(UserBase):
    """Model for reading user information, includes additional fields."""

    id: int
    created_at: datetime
    rating: int
    role: UserRole

    class Config:
        # Allows using ORM models to create Pydantic model instances
        from_attributes = True
