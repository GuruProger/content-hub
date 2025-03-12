from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from api.auth import schemas
from api.auth import utils as auth_utils
from core.models.user import User


async def get_user(
    email: str,
    session: AsyncSession,
) -> User:
    query = select(User).where(User.email == email)
    result = await session.execute(query)
    return result.scalar_one_or_none()
