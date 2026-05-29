from app.infrastructure.notifications.base import NotificationAdapter
from app.infrastructure.notifications.max_adapter import MaxNotificationAdapter


class NotificationService:
    def __init__(self, adapter: NotificationAdapter | None = None) -> None:
        self.adapter = adapter or MaxNotificationAdapter()

    async def send(self, user_id: str, message: str) -> bool:
        return await self.adapter.send(user_id, message)
