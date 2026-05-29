from celery import Celery
from celery.schedules import crontab

from app.config import get_settings

settings = get_settings()

celery_app = Celery(
    "bashkortostan_dashboard",
    broker=settings.redis_url,
    backend=settings.redis_url,
)

celery_app.conf.timezone = "Asia/Yekaterinburg"
celery_app.conf.beat_schedule = {
    "fetch-opendata-daily": {
        "task": "app.workers.tasks.run_scheduled_connectors",
        "schedule": crontab(hour=4, minute=0),
    },
    "check-bdmo-weekly": {
        "task": "app.workers.tasks.run_scheduled_connectors",
        "schedule": crontab(hour=5, minute=0, day_of_week=1),
    },
    "process-notification-queue": {
        "task": "app.workers.tasks.process_notification_queue",
        "schedule": crontab(minute="*/5"),
    },
}

celery_app.autodiscover_tasks(["app.workers"])
