import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager

from core.models import db_helper
from core.config import settings
from api import router as api_router
from api.auth import auth_router


@asynccontextmanager
async def lifespan(lifespan_app: FastAPI):
    # Code to run before the application starts
    yield
    # Code to run after the application has finished
    await db_helper.dispose()  # Closing all connections


app = FastAPI(lifespan=lifespan)
app.include_router(api_router)
app.include_router(auth_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host=settings.run.host,
        port=settings.run.port,
        reload=True,
    )
