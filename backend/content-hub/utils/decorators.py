from functools import wraps
from typing import Callable, Coroutine, Any


from fastapi import HTTPException, status
from sqlalchemy.exc import SQLAlchemyError, IntegrityError
from sqlalchemy.ext.asyncio import AsyncSession


def handle_db_errors(func: Callable[..., Coroutine[Any, Any, Any]]):
    @wraps(func)
    async def wrapper(*args, **kwargs):
        session = None
        for arg in args:
            if isinstance(arg, AsyncSession):
                session = arg
                break
        if not session:
            for arg in kwargs.values():
                if isinstance(arg, AsyncSession):
                    session = arg
                    break

        try:
            return await func(*args, **kwargs)
        except IntegrityError as e:
            if session:
                await session.rollback()
            if "uq_user_username" in str(e).lower():
                raise HTTPException(
                    status_code=status.HTTP_409_CONFLICT,
                    detail={"loc": "username", "msg": "Username already exists"},
                )
            elif "uq_user_email" in str(e).lower():
                raise HTTPException(
                    status_code=status.HTTP_409_CONFLICT,
                    detail={"loc": "email", "msg": "Email already exists"},
                )
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail="Unique constraint violation",
            )
        except SQLAlchemyError:
            if session:
                await session.rollback()
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Database error",
            )

    return wrapper
