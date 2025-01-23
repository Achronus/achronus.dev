from typing import Any, Dict, List, Optional, Union

from db.supabase.base import SupabaseBaseManager

from fastapi import HTTPException


class SupabaseTableManager(SupabaseBaseManager):
    """
    CRUD operations for table records.
    """

    async def create(self, table: str, data: Dict[str, Any]) -> Dict[str, Any]:
        """Creates a single record in the TABLE."""
        try:
            result = self.supabase.table(table).insert(data).execute()
            return result.data[0] if result.data else {}

        except Exception as e:
            raise HTTPException(
                status_code=400, detail=f"Error creating record: {str(e)}"
            )

    async def get(
        self, table: str, record_id: Union[str, int]
    ) -> Optional[Dict[str, Any]]:
        """Gets a single record with RECORD_ID from the TABLE."""
        try:
            result = (
                self.supabase.table(table).select("*").eq("id", record_id).execute()
            )
            return result.data[0] if result.data else None

        except Exception as e:
            raise HTTPException(
                status_code=404, detail=f"Error retrieving record: {str(e)}"
            )

    async def get_multiple(
        self,
        table: str,
        filters: Optional[Dict[str, Any]] = None,
        order_by: Optional[str] = None,
        limit: Optional[int] = None,
    ) -> List[Dict[str, Any]]:
        """Retrieves multiple records from the TABLE."""
        try:
            query = self.supabase.table(table).select("*")

            if filters:
                for key, value in filters.items():
                    query = query.eq(key, value)

            if order_by:
                query = query.order(order_by)

            if limit:
                query = query.limit(limit)

            result = query.execute()
            return result.data

        except Exception as e:
            raise HTTPException(
                status_code=400, detail=f"Error retrieving records: {str(e)}"
            )

    async def update(
        self, table: str, record_id: Union[str, int], data: Dict[str, Any]
    ) -> Dict[str, Any]:
        """Update a single record in the TABLE."""
        try:
            result = (
                self.supabase.table(table).update(data).eq("id", record_id).execute()
            )
            return result.data[0] if result.data else {}

        except Exception as e:
            raise HTTPException(
                status_code=400, detail=f"Error updating record: {str(e)}"
            )

    async def delete(self, table: str, record_id: Union[str, int]) -> bool:
        """Delete a single record in the TABLE."""
        try:
            result = self.supabase.table(table).delete().eq("id", record_id).execute()
            return bool(result.data)

        except Exception as e:
            raise HTTPException(
                status_code=400, detail=f"Error deleting record: {str(e)}"
            )
