from fastapi import APIRouter
from .auth_config import router as auth_router

router = APIRouter()
router.include_router(auth_router)