
from jwt.exceptions import InvalidTokenError
from fastapi import Depends, HTTPException, status, APIRouter
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy import select
from sqlalchemy.exc import IntegrityError
from sqlalchemy.ext.asyncio import AsyncSession

from api.auth import auth_utils as auth_utils
from core.models.user import User
from api.auth.schemas import UserCreateInput, Token
from core.models.db_helper import db_helper

session_getter = db_helper.session_getter


oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl="/jwt/login/",
)

router = APIRouter(prefix="/jwt", tags=["JWT"])


async def validate_auth_user(
    user_login: UserCreateInput,
    session: AsyncSession = Depends(session_getter),
) -> User:
    result = await session.execute(
        select(User).where(User.username == user_login.username)
    )
    user = result.scalar_one_or_none()

    if not user or not auth_utils.validate_password(
        password=user_login.password,
        hashed_password=user.password_hash,
    ):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid username or password"
        )
    return user

async def get_token_payload(
    token: str = Depends(oauth2_scheme),
) -> dict:
    try:
        payload = auth_utils.decode_jwt(
            token=token,
        )
    except InvalidTokenError as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=f"invalid token error: {e}",
        )
    return payload


async def get_current_auth_user(
    payload: dict = Depends(get_token_payload),
    session: AsyncSession = Depends(session_getter),
) -> User:
    username: str | None = payload.get("sub")
    if not username:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="token invalid (missing subject)",
        )

    result = await session.execute(select(User).where(User.username == username))
    user = result.scalar_one_or_none()

    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="token invalid (user not found)",
        )
    return user


@router.post("/login/", response_model=Token)
async def auth_user_jwt(
    user: User = Depends(validate_auth_user),
) -> Token:
    jwt_payload = {
        "sub": user.username,
        "username": user.username,
        "email": user.email,
    }
    token = auth_utils.encode_jwt(jwt_payload)
    return Token(
        access_token=token,
        token_type="Bearer",
    )


@router.get("/users/me/")
async def auth_user_check_info(
    payload: dict = Depends(get_token_payload),
    user: User = Depends(get_current_auth_user),
):
    iat = payload.get("iat")
    if not iat:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="token missing 'iat' field",
        )

    return {
        "username": user.username,
        "email": user.email,
        "logged_in_at": iat,
    }


@router.post("/register/", status_code=status.HTTP_201_CREATED)
async def register_user(
    user_data: UserCreateInput,
    session: AsyncSession = Depends(session_getter),
):
    try:
        hashed_password = auth_utils.hash_password(user_data.password)
        new_user = User(
            username=user_data.username,
            email=user_data.email,
            password_hash=hashed_password,
        )
        session.add(new_user)
        await session.commit()
        jwt_payload = {"sub": new_user.username, "username": new_user.username, "email": new_user.email}
        token = auth_utils.encode_jwt(jwt_payload)
        return Token(access_token=token, token_type="Bearer")
    except IntegrityError:
        await session.rollback()
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Username or email already exists.",
        )