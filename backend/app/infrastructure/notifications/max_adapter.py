import logging

import httpx

from app.config import get_settings
from app.infrastructure.notifications.base import NotificationAdapter

logger = logging.getLogger(__name__)


class MaxNotificationAdapter(NotificationAdapter):
    async def send(self, user_id: str, message: str) -> bool:
        settings = get_settings()
        if not settings.max_api_url or not settings.max_bot_token:
            logger.warning("MAX_API_URL или MAX_BOT_TOKEN не заданы — уведомление не отправлено")
            return False

        payload = {
            "userId": user_id,
            "message": message,
            "token": settings.max_bot_token,
        }

        async with httpx.AsyncClient(timeout=settings.max_request_timeout_seconds) as client:
            response = await client.post(settings.max_api_url, json=payload)
            response.raise_for_status()
        return True
