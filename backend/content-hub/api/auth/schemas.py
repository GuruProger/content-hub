from pydantic import BaseModel, EmailStr, ConfigDict


class UserCreateInput(BaseModel):
    model_config = ConfigDict(strict=True)
    username: str
    password: str
    email: EmailStr

class UserLoginInput(BaseModel):
    model_config = ConfigDict(strict=True)
    username: str
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str


