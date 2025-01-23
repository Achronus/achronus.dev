from supabase import Client


class SupabaseBaseManager:
    """A base class for manager components."""

    def __init__(self, supabase: Client) -> None:
        self.supabase = supabase
