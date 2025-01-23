from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict


class SupabaseSettings(BaseSettings):
    """Model for getting the Supabase URL and KEY from `.env` file."""

    SUPABASE_URL: str = Field(..., description="Database URL")
    SUPABASE_KEY: str = Field(..., description="Project key")

    model_config = SettingsConfigDict(
        env_file=".env",
        env_ignore_empty=True,
        extra="ignore",
    )
