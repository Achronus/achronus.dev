from typing import Annotated, Literal

from app.utils import parse_cors

from pydantic import AnyUrl, BeforeValidator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """A storage container for all config settings."""

    model_config = SettingsConfigDict(
        env_file=".env",
        env_ignore_empty=True,
        extra="ignore",
    )

    API_VERSION: str = "v1"
    ENVIRONMENT: Literal["local", "staging", "production"] = "local"
    DOMAIN: str = "localhost"

    BACKEND_CORS_ORIGINS: Annotated[
        str | list[AnyUrl], BeforeValidator(parse_cors)
    ] = []
