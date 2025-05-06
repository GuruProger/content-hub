from datetime import datetime, timezone
from pydantic import BaseModel, ConfigDict, field_validator


class LikeCommentBase(BaseModel):
    comment_id: int
    user_id: int


class LikeCommentCreate(LikeCommentBase):
    model_config = ConfigDict(strict=True)


class LikeCommentOut(LikeCommentBase):
    created_at: datetime

    @field_validator("created_at", mode="before")
    def remove_timezone(cls, value):
        if value.tzinfo is not None:
            return value.replace(tzinfo=None)
        return value

    class Config:
        from_attributes = True
