"""initial schema

Revision ID: 001
Revises:
Create Date: 2026-05-29
"""

from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa

revision: str = "001"
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table(
        "municipalities",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("oktmo", sa.String(length=11), nullable=False),
        sa.Column("name", sa.String(length=255), nullable=False),
        sa.Column("type", sa.String(length=32), nullable=False),
        sa.Column("slug", sa.String(length=64), nullable=False),
    )
    op.create_index("ix_municipalities_oktmo", "municipalities", ["oktmo"], unique=True)
    op.create_index("ix_municipalities_slug", "municipalities", ["slug"], unique=True)

    op.create_table(
        "users",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("login", sa.String(length=64), nullable=False),
        sa.Column("password_hash", sa.String(length=255), nullable=False),
        sa.Column("role", sa.Enum("user", "admin", name="userroleenum"), nullable=False),
        sa.Column("municipality_id", sa.Integer(), sa.ForeignKey("municipalities.id"), nullable=True),
        sa.Column("max_user_id", sa.String(length=128), nullable=True),
        sa.Column("is_active", sa.Boolean(), nullable=False, server_default=sa.text("true")),
    )
    op.create_index("ix_users_login", "users", ["login"], unique=True)

    op.create_table(
        "indicators",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("code", sa.String(length=128), nullable=False),
        sa.Column("name", sa.String(length=512), nullable=False),
        sa.Column("unit", sa.String(length=64), nullable=False),
        sa.Column("category", sa.String(length=128), nullable=False),
        sa.Column("source", sa.String(length=64), nullable=False),
    )
    op.create_index("ix_indicators_code", "indicators", ["code"], unique=True)

    op.create_table(
        "indicator_values",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("indicator_id", sa.Integer(), sa.ForeignKey("indicators.id"), nullable=False),
        sa.Column("municipality_id", sa.Integer(), sa.ForeignKey("municipalities.id"), nullable=False),
        sa.Column("period", sa.Date(), nullable=False),
        sa.Column("value", sa.Float(), nullable=False),
        sa.Column("payload_hash", sa.String(length=64), nullable=False),
        sa.UniqueConstraint("indicator_id", "municipality_id", "period", name="uq_value_period"),
    )

    op.create_table(
        "raw_data_cache",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("connector_id", sa.String(length=64), nullable=False),
        sa.Column("period", sa.Date(), nullable=False),
        sa.Column("oktmo", sa.String(length=11), nullable=True),
        sa.Column("payload_hash", sa.String(length=64), nullable=False),
        sa.Column("payload_json", sa.Text(), nullable=False),
        sa.Column("fetched_at", sa.DateTime(timezone=True), nullable=False),
    )

    op.create_table(
        "connector_runs",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("connector_id", sa.String(length=64), nullable=False),
        sa.Column("period", sa.Date(), nullable=False),
        sa.Column("status", sa.String(length=32), nullable=False),
        sa.Column("message", sa.Text(), nullable=True),
        sa.Column("consecutive_failures", sa.Integer(), nullable=False, server_default="0"),
        sa.Column("started_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("finished_at", sa.DateTime(timezone=True), nullable=True),
    )

    op.create_table(
        "ranking_snapshots",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("indicator_id", sa.Integer(), sa.ForeignKey("indicators.id"), nullable=False),
        sa.Column("period", sa.Date(), nullable=False),
        sa.Column("municipality_id", sa.Integer(), sa.ForeignKey("municipalities.id"), nullable=False),
        sa.Column("rank", sa.Integer(), nullable=False),
        sa.Column("total", sa.Integer(), nullable=False),
        sa.Column("value", sa.Float(), nullable=False),
        sa.Column("rank_delta", sa.Integer(), nullable=True),
        sa.UniqueConstraint("indicator_id", "period", "municipality_id", name="uq_ranking"),
    )

    op.create_table(
        "notification_logs",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("user_id", sa.Integer(), sa.ForeignKey("users.id"), nullable=False),
        sa.Column("channel", sa.String(length=32), nullable=False),
        sa.Column("message", sa.Text(), nullable=False),
        sa.Column("status", sa.String(length=32), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
    )


def downgrade() -> None:
    op.drop_table("notification_logs")
    op.drop_table("ranking_snapshots")
    op.drop_table("connector_runs")
    op.drop_table("raw_data_cache")
    op.drop_table("indicator_values")
    op.drop_table("indicators")
    op.drop_table("users")
    op.drop_table("municipalities")
    op.execute("DROP TYPE IF EXISTS userroleenum")
