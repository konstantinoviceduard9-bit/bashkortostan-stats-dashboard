import json

import redis

from app.config import get_settings

QUEUE_KEY = "events:new_data_detected"


def enqueue_new_data_event(payload: dict) -> None:
    settings = get_settings()
    client = redis.from_url(settings.redis_url)
    client.lpush(QUEUE_KEY, json.dumps(payload, ensure_ascii=False))


def pop_new_data_event() -> dict | None:
    settings = get_settings()
    client = redis.from_url(settings.redis_url)
    raw = client.brpop(QUEUE_KEY, timeout=1)
    if not raw:
        return None
    _, message = raw
    return json.loads(message)
