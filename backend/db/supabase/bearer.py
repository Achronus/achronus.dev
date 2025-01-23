from fastapi import HTTPException, Request, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer

from gotrue import UserResponse
from supabase import Client


class SupabaseBearer(HTTPBearer):
    def __init__(self, client: Client, auto_error: bool = True):
        """
        Supabase Bearer authentication for FastAPI.

        Parameters:
            auto_error (bool, optional): Automatically raises HTTPException on authentication failure. True by default
        """
        super().__init__(auto_error=auto_error)
        self.supabase = client

    async def __call__(self, request: Request) -> UserResponse:
        """
        Validate Supabase JWT token during authentication

        Parameters:
            request (fastapi.Request): Incoming HTTP request

        Return:
            user (UserResponse): User information from token
        """
        credentials: HTTPAuthorizationCredentials = await super().__call__(request)

        if not credentials:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Invalid authorization header",
            )

        if not credentials.scheme.lower() == "bearer":
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Invalid authentication scheme",
            )

        try:
            user = self.supabase.auth.get_user(credentials.credentials)
            return user

        except Exception:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Invalid or expired token",
            )
