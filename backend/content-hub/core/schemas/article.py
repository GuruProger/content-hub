from datetime import datetime
from pydantic import BaseModel, Field
from typing import Optional


class ArticleBaseSchema(BaseModel):
    """Base model for Article, containing common fields."""

    title: str = Field(..., max_length=255)
    content: str


class ArticleCreateSchema(ArticleBaseSchema):
    """Model for creating a new article."""

    user_id: int
    is_published: bool = False


class ArticleUpdateSchema(BaseModel):
    """Model for updating article fields. All fields are optional."""

    title: Optional[str] = Field(None, max_length=255)
    content: Optional[str] = Field(None)
    is_published: Optional[bool] = None


class ArticleReadSchema(ArticleBaseSchema):
    """Model for reading article information, includes additional fields."""

    id: int
    user_id: int
    created_at: datetime
    updated_at: datetime
    rating: int
    is_published: bool

    class Config:
        from_attributes = True
