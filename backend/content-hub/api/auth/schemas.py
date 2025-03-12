from pydantic import BaseModel, EmailStr, ConfigDict


class UserCreateInput(BaseModel):
    model_config = ConfigDict(strict=True)
    username: str
    password: bytes
    email: EmailStr | None = None


class Token(BaseModel):
    access_token: str
    token_type: str


