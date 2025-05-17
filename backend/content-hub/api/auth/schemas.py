from pydantic import BaseModel, EmailStr, ConfigDict, constr


class UserCreateInput(BaseModel):
    model_config = ConfigDict(strict=True)
    username: str
    password: constr(min_length=8, max_length=30)
    email: EmailStr

class UserLoginInput(BaseModel):
    model_config = ConfigDict(strict=True)
    username: str
    password: constr(min_length=8, max_length=30)

class Token(BaseModel):
    access_token: str
    token_type: str


