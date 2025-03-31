from fastapi import APIRouter

from core.config import settings

from .users import router as users_router
from .articles import router as articles_router


router = APIRouter(
    prefix=settings.api.v1.prefix,
)
router.include_router(
    users_router,
    prefix=settings.api.v1.users,
)
router.include_router(
    articles_router,
    prefix=settings.api.v1.articles,
)