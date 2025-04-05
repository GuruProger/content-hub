from datetime import datetime
from pydantic import BaseModel, Field


class ArticleBaseSchema(BaseModel):
    """Base model for Article, containing common fields."""

    title: str = Field(..., max_length=255)
    content: str
    rating: float = 0.0


class ArticleCreateSchema(ArticleBaseSchema):
    """Model for creating a new article."""

    user_id: int
    is_published: bool = False


class ArticleUpdateSchema(BaseModel):
    """Model for updating article fields. All fields are optional."""

    title: str | None = Field(None, max_length=255)
    content: str | None = None
    rating: float | None = None
    is_published: bool | None = None


class ArticleReadSchema(ArticleBaseSchema):
    """Model for reading article information, includes additional fields."""

    id: int
    user_id: int
    created_at: datetime
    updated_at: datetime
    is_published: bool

    class Config:
        from_attributes = True
