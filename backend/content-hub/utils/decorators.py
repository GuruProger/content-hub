from functools import wraps
from typing import Callable, Coroutine, Any


from fastapi import HTTPException, status
from sqlalchemy.exc import SQLAlchemyError, IntegrityError
from sqlalchemy.ext.asyncio import AsyncSession


def create_db_error_handler(unique_constraints: dict[str, dict]):
    """
    Factory function that creates a database error handler decorator.

    Args:
        unique_constraints: Dictionary mapping database constraint names to
                           exception parameters. When these constraints are violated,
                           specific HTTPExceptions will be raised with the provided details.

    Returns:
        A decorator that can be applied to database operations to handle common errors.
    """

    def decorator(func: Callable[..., Coroutine[Any, Any, Any]]):
        """
        The actual decorator that wraps database operations.

        Args:
            func: The async database operation function to be wrapped.

        Returns:
            A wrapped function with error handling capabilities.
        """

        @wraps(func)
        async def wrapper(*args, **kwargs):
            """
            Wrapper function that executes the database operation and handles errors.

            Handles:
            - IntegrityError (including unique constraint violations)
            - Generic SQLAlchemy errors

            Rolls back the session on error and raises appropriate HTTPExceptions.
            """
            # Find the AsyncSession in either args or kwargs
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
                # Execute the original function
                return await func(*args, **kwargs)

            except IntegrityError as e:
                # Handle integrity errors (like unique constraint violations)
                if session:
                    await session.rollback()

                error_str = str(e).lower()
                # Check if the error matches any of our known unique constraints
                for constraint, exc_params in unique_constraints.items():
                    if constraint.lower() in error_str:
                        raise HTTPException(**exc_params)

                # If no specific constraint matched, raise a generic conflict error
                raise HTTPException(
                    status_code=status.HTTP_409_CONFLICT,
                    detail="Unique constraint violation",
                )

            except SQLAlchemyError:
                # Handle all other SQLAlchemy errors
                if session:
                    await session.rollback()
                raise HTTPException(
                    status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                    detail="Database error",
                )

        return wrapper

    return decorator


user_error_handler = create_db_error_handler(
    {
        "uq_user_username": {
            "status_code": status.HTTP_409_CONFLICT,
            "detail": {"loc": "username", "msg": "Username already exists"},
        },
        "uq_user_email": {
            "status_code": status.HTTP_409_CONFLICT,
            "detail": {"loc": "email", "msg": "Email already exists"},
        },
    }
)
