from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.dependencies import CurrentUser, get_current_user
from app.api.schemas import ProfileUpdate, UserProfile
from app.infrastructure.db.models import Municipality, User
from app.infrastructure.db.session import get_db
from app.infrastructure.security.password import hash_password, verify_password

router = APIRouter(prefix="/profile", tags=["profile"])


@router.get("", response_model=UserProfile)
async def get_profile(
    user: CurrentUser = Depends(get_current_user),
    session: AsyncSession = Depends(get_db),
) -> UserProfile:
    municipality_name = None
    if user.municipality_id:
        municipality = await session.get(Municipality, user.municipality_id)
        municipality_name = municipality.name if municipality else None
    return UserProfile(
        login=user.login,
        role=user.role.value,
        municipality_name=municipality_name,
        max_user_id=user.max_user_id,
    )


@router.patch("", response_model=UserProfile)
async def update_profile(
    payload: ProfileUpdate,
    user: CurrentUser = Depends(get_current_user),
    session: AsyncSession = Depends(get_db),
) -> UserProfile:
    db_user = await session.get(User, user.id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="Пользователь не найден")

    if payload.new_password:
        if not payload.current_password or not verify_password(payload.current_password, db_user.password_hash):
            raise HTTPException(status_code=400, detail="Неверный текущий пароль")
        db_user.password_hash = hash_password(payload.new_password)

    if payload.max_user_id is not None:
        db_user.max_user_id = payload.max_user_id

    await session.commit()

    municipality_name = None
    if db_user.municipality_id:
        municipality = await session.get(Municipality, db_user.municipality_id)
        municipality_name = municipality.name if municipality else None

    return UserProfile(
        login=db_user.login,
        role=db_user.role.value,
        municipality_name=municipality_name,
        max_user_id=db_user.max_user_id,
    )
