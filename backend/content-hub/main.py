import uvicorn
from fastapi import FastAPI

from core.config import app_settings

# from api import router as api_router


app = FastAPI()
# app.include_router(
# 	api_router,
# )

if __name__ == "__main__":
	uvicorn.run(
		"main:app",
		host=app_settings.HOST,
		port=app_settings.PORT,
		reload=True,
	)
