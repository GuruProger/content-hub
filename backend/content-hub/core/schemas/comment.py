from pydantic import BaseModel, ConfigDict
from datetime import datetime


class CommentCreate(BaseModel):
    model_config = ConfigDict(strict=True)
    content: str
    article_id: int
    user_id: int


class CommentUpdate(BaseModel):
    content: str


class CommentOut(BaseModel):
    id: int
    content: str
    article_id: int
    user_id: int
    created_at: datetime

    class Config:
        from_attributes = True
