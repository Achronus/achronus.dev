from typing import Annotated

from app.schemas import Session
from db.supabase import (
    SupabaseUserManager,
    SupabaseBearer,
    get_user,
    get_db,
)

from fastapi import APIRouter, Depends

from pydantic import BaseModel, Field
from gotrue import UserResponse, User, AuthResponse


bearer = SupabaseBearer(get_db())
router = APIRouter(prefix="/auth", tags=["Authentication"])

manager_dep = Annotated[SupabaseUserManager, Depends(get_user)]
bearer_dep = Annotated[SupabaseBearer, Depends(bearer)]


class UserLogin(BaseModel):
    session: Session = Field(..., description="Session tokens")
    user: User = Field(..., description="User details")


class UserCreate(BaseModel):
    email: str = Field(..., description="Your email address")
    password: str = Field(..., description="Your password")


@router.post("/login", response_model=UserLogin)
async def login(email: str, password: str, db: manager_dep):
    response = await db.login_password(email, password)

    return UserLogin(
        session=Session(
            access_token=response.session.access_token,
            refresh_token=response.session.refresh_token,
        ),
        user=response.user,
    )


@router.post("/register", response_model=AuthResponse)
async def register(user: UserCreate, db: manager_dep):
    response = await db.create_user(user.email, user.password)
    return response


@router.post("/logout", response_model=None)
async def logout(db: manager_dep, user: bearer_dep):
    await db.logout()
    return {"message": "Successfully logged out"}


@router.get("/me", response_model=UserResponse)
async def me(user: bearer_dep):
    return user


@router.get("/session", response_model=Session)
async def session(db: manager_dep, user: bearer_dep):
    response = await db.get_session()

    return Session(
        access_token=response.access_token,
        refresh_token=response.refresh_token,
    )
