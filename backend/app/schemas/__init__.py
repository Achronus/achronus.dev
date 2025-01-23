from pydantic import BaseModel


class Session(BaseModel):
    """Session token containing access and refresh tokens."""

    access_token: str | None = None
    refresh_token: str | None = None
