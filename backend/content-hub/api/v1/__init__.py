from fastapi import APIRouter

from core.config import settings

from .users import router as users_router
from .articles import router as articles_router
from .like_article import router as like_articles_router
from .comment import router as comments_router
from .like_comment import router as like_comments_router

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
router.include_router(
    like_articles_router,
    prefix=settings.api.v1.like_articles,
)
router.include_router(
    comments_router,
    prefix=settings.api.v1.comments,
)

router.include_router(
    like_comments_router,
    prefix=settings.api.v1.like_comments,
)