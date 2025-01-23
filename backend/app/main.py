from contextlib import asynccontextmanager
from pathlib import Path

from app.conf import SETTINGS
from app.api import auth

from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles

# from zentra_api.responses import zentra_json_response


@asynccontextmanager
async def lifespan(app: FastAPI):
    yield


app = FastAPI(
    docs_url="/api/docs",
    redoc_url=None,
    lifespan=lifespan,
)

app.mount(
    "/static",
    StaticFiles(directory=Path(__package__, "static")),
    name="static",
)

app.include_router(auth.router, prefix=f"/{SETTINGS.API_VERSION}")

app.add_middleware(
    CORSMiddleware,
    allow_origins=SETTINGS.BACKEND_CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# @app.exception_handler(HTTPException)
# async def http_exception_handler(request: Request, exc: HTTPException) -> JSONResponse:
#     return zentra_json_response(exc)


@app.get("/", include_in_schema=False)
def health_check():
    return {"health": "ok"}
