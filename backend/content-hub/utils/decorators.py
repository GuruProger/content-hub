from functools import wraps
from typing import Callable, Coroutine, Any


from fastapi import HTTPException, status
from sqlalchemy.exc import SQLAlchemyError, IntegrityError, NoResultFound
from sqlalchemy.ext.asyncio import AsyncSession


def db_error_handler_decorator_factory(unique_constraints: dict[str, dict]):
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


user_error_handler = db_error_handler_decorator_factory(
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


def article_error_handler(func):
    """
    Decorator for handling errors in article CRUD operations.

    Handles various types of errors:
    - SQLAlchemyError and its subclasses
    - ValueError (validation errors)
    - HTTPException (passes them through)
    - Any other exceptions

    Automatically performs session rollback on error.

    Args:
        func: Article CRUD operation function

    Returns:
        Wrapped function with error handling
    """

    @wraps(func)
    async def wrapper(*args, **kwargs):
        # Find the session object in parameters
        session = None
        for arg in args:
            if isinstance(arg, AsyncSession):
                session = arg
                break
        if not session:
            for key, arg in kwargs.items():
                if isinstance(arg, AsyncSession):
                    session = arg
                    break

        try:
            return await func(*args, **kwargs)

        except HTTPException:
            # Pass through already created HTTPExceptions
            raise

        except NoResultFound:
            # If scalar_one() was used and nothing was found
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND, detail="Article not found"
            )

        except IntegrityError as e:
            if session:
                await session.rollback()

            # Check for uniqueness violation
            error_msg = str(e).lower()
            if "unique" in error_msg:  # Currently not in use
                raise HTTPException(
                    status_code=status.HTTP_409_CONFLICT,
                    detail="Article with these properties already exists",
                )

            # Otherwise general data integrity error
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"Database integrity error: {str(e)}",
            )

        except SQLAlchemyError as e:
            if session:
                await session.rollback()

            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail=f"Database error: {str(e)}",
            )

        except ValueError as e:
            if session:
                await session.rollback()

            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"Validation error: {str(e)}",
            )

        except Exception as e:
            if session:
                await session.rollback()

            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail=f"Unexpected error: {str(e)}",
            )

    return wrapper
