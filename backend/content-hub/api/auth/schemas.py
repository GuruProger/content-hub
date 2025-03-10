from pydantic import BaseModel, EmailStr


class UserCreateInput(BaseModel):
    email: EmailStr
    password: str