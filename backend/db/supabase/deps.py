from typing import Annotated

from db.supabase.table import SupabaseTableManager
from db.supabase.settings import SupabaseSettings
from db.supabase.storage import SupabaseStorageManager
from db.supabase.user import SupabaseUserManager

from fastapi import Depends
from supabase import Client, create_client


def get_supabase_client() -> Client:
    """
    Creates a Supabase client session.

    Parameters:
        options (supabase.ClientOptions, optional): Any extra client settings to be specified. None by default
    """
    config = SupabaseSettings()
    return create_client(
        supabase_url=config.SUPABASE_URL,
        supabase_key=config.SUPABASE_KEY,
    )


sb_client = get_supabase_client()


def get_db() -> Client:
    """Supabase client dependency wrapper."""
    return sb_client


def get_table(
    client: Annotated[Client, Depends(get_db)],
) -> SupabaseTableManager:
    """Supabase table CRUD dependency wrapper."""
    return SupabaseTableManager(client)


def get_user(
    client: Annotated[Client, Depends(get_db)],
) -> SupabaseUserManager:
    """Supabase user CRUD dependency wrapper."""
    return SupabaseUserManager(client)


def get_storage(
    client: Annotated[Client, Depends(get_db)],
) -> SupabaseStorageManager:
    """Supabase storage CRUD dependency wrapper."""
    return SupabaseStorageManager(client)
