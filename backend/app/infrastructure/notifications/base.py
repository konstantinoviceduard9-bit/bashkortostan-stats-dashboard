from abc import ABC, abstractmethod


class NotificationAdapter(ABC):
    @abstractmethod
    async def send(self, user_id: str, message: str) -> bool:
        pass
