from datetime import datetime, timezone
from pydantic import BaseModel, ConfigDict, field_validator


class LikeBase(BaseModel):
    article_id: int
    user_id: int


class LikeCreate(LikeBase):
    model_config = ConfigDict(strict=True)


class LikeOut(LikeBase):
    created_at: datetime

    @field_validator("created_at", mode="before")
    def remove_timezone(cls, value):
        if value.tzinfo is not None:
            return value.replace(tzinfo=None)
        return value

    class Config:
        from_attributes = True
