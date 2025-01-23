from typing import Any, Dict

from db.supabase.base import SupabaseBaseManager

from fastapi import HTTPException, status
from gotrue import AuthResponse, UserResponse, Session


class SupabaseUserManager(SupabaseBaseManager):
    """Create, Read, Update (CRU), sign-in and sign-out operations for users."""

    async def create_user(self, email: str, password: str) -> AuthResponse:
        """Creates a new user in the database."""
        try:
            user = self.supabase.auth.sign_up(
                {
                    "email": email,
                    "password": password,
                }
            )
            return user

        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"Error creating user: {str(e)}",
            )

    async def update_user(self, user_data: Dict[str, Any]) -> UserResponse:
        """Updates user information in the database. Only works for signed-in user."""
        try:
            return self.supabase.auth.update_user(user_data)

        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"Error updating user: {str(e)}",
            )

    async def login_password(self, email: str, password: str) -> AuthResponse:
        """Login a user using a password."""
        try:
            return self.supabase.auth.sign_in_with_password(
                {
                    "email": email,
                    "password": password,
                }
            )

        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail=f"Invalid credentials: {str(e)}",
            )

    async def logout(self) -> None:
        """Sign out a user."""
        try:
            self.supabase.auth.sign_out()

        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"Failed to logout: {str(e)}",
            )

    async def get_session(self) -> Session:
        """Retrieve session tokens."""
        try:
            response = self.supabase.auth.get_session()

            if response is None:
                raise HTTPException(
                    status_code=status.HTTP_401_UNAUTHORIZED,
                    detail="No active session",
                    headers={"WWW-Authenticate": "Bearer"},
                )

            return response

        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="No active session",
                headers={"WWW-Authenticate": "Bearer"},
            )

    async def get_user(self) -> UserResponse:
        """Retrieve user details."""
        try:
            response = self.supabase.auth.get_user()

            if response is None:
                raise HTTPException(
                    status_code=status.HTTP_400_BAD_REQUEST,
                    detail="No active user",
                )

        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail=f"Failed to retrieve user: {str(e)}",
            )
