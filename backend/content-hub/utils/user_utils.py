from typing import Type

from fastapi import UploadFile, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from io import BytesIO
from PIL import Image
import imghdr

from core.models import User


async def get_user_by_id(session: AsyncSession, user_id: int) -> Type[User]:
    user = await session.get(User, user_id)
    if user is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found",
        )
    return user


async def process_avatar(
    avatar: UploadFile | None,
    max_size_mb: int = 5,
    max_dimensions: tuple[int, int] = (2000, 2000),
) -> bytes | None:
    if not avatar:
        return None

    # Check content type
    if not avatar.content_type.startswith("image/"):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail={"loc": "avatar", "msg": "File must be an image"},
        )

    # Check file size
    max_size_bytes = max_size_mb * 1024 * 1024
    avatar.file.seek(0, 2)  # Move to the end of the file
    file_size = avatar.file.tell()
    avatar.file.seek(0)  # Return to the beginning

    if file_size > max_size_bytes:
        raise HTTPException(
            status_code=status.HTTP_413_REQUEST_ENTITY_TOO_LARGE,
            detail={
                "loc": "avatar",
                "msg": f"File size exceeds maximum allowed {max_size_mb}MB",
            },
        )

    try:
        image_data = await avatar.read()

        # Verify that the file is actually an image
        image_format = imghdr.what(None, image_data)
        if not image_format:
            raise HTTPException(
                status_code=status.HTTP_415_UNSUPPORTED_MEDIA_TYPE,
                detail={"loc": "avatar", "msg": "Uploaded file is not a valid image"},
            )

        # Check image dimensions
        img = Image.open(BytesIO(image_data))
        width, height = img.size
        max_width, max_height = max_dimensions

        if width > max_width or height > max_height:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail={
                    "loc": "avatar",
                    "msg": f"Image dimensions exceed maximum allowed {max_width}x{max_height}",
                },
            )

        return image_data

    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail={"loc": "avatar", "msg": f"Error processing image: {str(e)}"},
        )
    finally:
        await avatar.close()
