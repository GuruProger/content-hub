from pydantic import BaseModel, Field
from datetime import datetime
from typing import List, Optional


class ConfigMixin:
    """Common Pydantic configuration for all ORM-compatible schemas."""

    class Config:
        from_attributes = True


class TagBaseSchema(BaseModel, ConfigMixin):
    """Base model for Tag, containing common fields"""

    name: str = Field(..., max_length=50)


class TagReadSchema(TagBaseSchema):
    """Model for reading tag information"""

    id: int


class ArticleBaseSchema(BaseModel, ConfigMixin):
    """Base model for Article, containing common fields"""

    title: str = Field(..., max_length=255)
    content: str
    rating: float = 0.0


class ArticleCreateSchema(ArticleBaseSchema):
    """Model for creating a new article"""

    user_id: int
    is_published: bool = False
    tags: List[str] = []


class ArticleUpdateSchema(BaseModel, ConfigMixin):
    """Model for updating article fields. All fields are optional"""

    title: Optional[str] = Field(None, max_length=255)
    content: Optional[str] = None
    rating: Optional[float] = None
    is_published: Optional[bool] = None
    tags: Optional[List[str]] = None


class ArticleReadSchema(ArticleBaseSchema):
    """Model for reading article information, includes additional fields"""

    id: int
    user_id: int
    created_at: datetime
    updated_at: datetime
    is_published: bool
    tags: List[TagReadSchema] = []


class ArticlePreviewSchema(BaseModel, ConfigMixin):
    """Model for previewing article information (without content)"""

    id: int
    title: str
    user_id: int
    created_at: datetime
    updated_at: datetime
    is_published: bool
    rating: float
    tags: List[TagReadSchema] = []
    content: Optional[str] = None  # Просто Optional с None по умолчанию

    class Config(ConfigMixin.Config):
        # Это позволит исключать None значения из вывода
        exclude_none = True
