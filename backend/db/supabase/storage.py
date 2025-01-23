from typing import BinaryIO, List, Optional

from db.supabase.base import SupabaseBaseManager

from fastapi import HTTPException, status


class SupabaseStorageManager(SupabaseBaseManager):
    """
    CRUD operations for storage buckets.
    """

    async def upload(self, bucket: str, file_path: str, file: BinaryIO) -> str:
        """Upload a file to Supabase Storage."""
        try:
            result = self.supabase.storage.from_(bucket).upload(file_path, file)
            return result

        except Exception as e:
            raise HTTPException(
                status_code=400, detail=f"Error uploading file: {str(e)}"
            )

    async def download(self, bucket: str, file_path: str) -> bytes:
        """Download a file from Supabase Storage."""
        try:
            result = self.supabase.storage.from_(bucket).download(file_path)
            return result

        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Error downloading file: {str(e)}",
            )

    async def delete(self, bucket: str, file_path: str) -> bool:
        """Delete a file from Supabase Storage."""
        try:
            self.supabase.storage.from_(bucket).remove([file_path])
            return True

        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"Error deleting file: {str(e)}",
            )

    async def list(self, bucket: str, path: Optional[str] = None) -> List[str]:
        """List files in a bucket/path."""
        try:
            result = self.supabase.storage.from_(bucket).list(path or "")
            return [file["name"] for file in result]

        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"Error listing files: {str(e)}",
            )

    async def get_public_url(self, bucket: str, file_path: str) -> str:
        """Get public URL for a file."""
        try:
            return self.supabase.storage.from_(bucket).get_public_url(file_path)

        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"Error getting public URL: {str(e)}",
            )
