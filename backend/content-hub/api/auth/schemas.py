from pydantic import BaseModel, EmailStr, ConfigDict, constr


class UserCreateInput(BaseModel):
    model_config = ConfigDict(strict=True)
    username: constr(min_length=2, max_length=60)
    password: constr(min_length=8, max_length=30)
    email: EmailStr

class UserLoginInput(BaseModel):
    model_config = ConfigDict(strict=True)
    username: constr(min_length=2, max_length=60)
    password: constr(min_length=8, max_length=30)

class Token(BaseModel):
    access_token: str
    token_type: str


