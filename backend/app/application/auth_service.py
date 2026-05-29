from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.infrastructure.db.models import User
from app.infrastructure.security.jwt import create_access_token
from app.infrastructure.security.password import verify_password


async def authenticate(session: AsyncSession, login: str, password: str) -> tuple[str, User] | None:
    user = await session.scalar(select(User).where(User.login == login, User.is_active.is_(True)))
    if user is None or not verify_password(password, user.password_hash):
        return None
    token = create_access_token(
        subject=str(user.id),
        role=user.role.value,
        municipality_id=user.municipality_id,
    )
    return token, user
