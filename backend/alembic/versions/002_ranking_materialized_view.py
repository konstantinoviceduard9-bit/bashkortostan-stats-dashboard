"""ranking materialized view

Revision ID: 002
Revises: 001
Create Date: 2026-05-29
"""

from typing import Sequence, Union

from alembic import op

revision: str = "002"
down_revision: Union[str, None] = "001"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None

VIEW_NAME = "mv_ranking_current"


def upgrade() -> None:
    op.execute(
        f"""
        CREATE MATERIALIZED VIEW {VIEW_NAME} AS
        SELECT
            rs.id,
            rs.indicator_id,
            i.code AS indicator_code,
            rs.period,
            rs.municipality_id,
            m.oktmo,
            m.name AS municipality_name,
            rs.rank,
            rs.total,
            rs.value,
            rs.rank_delta
        FROM ranking_snapshots rs
        JOIN indicators i ON i.id = rs.indicator_id
        JOIN municipalities m ON m.id = rs.municipality_id
        WITH DATA
        """
    )
    op.execute(
        f"""
        CREATE UNIQUE INDEX uq_{VIEW_NAME}_indicator_period_municipality
        ON {VIEW_NAME} (indicator_id, period, municipality_id)
        """
    )
    op.execute(f"CREATE INDEX ix_{VIEW_NAME}_indicator_period_rank ON {VIEW_NAME} (indicator_code, period, rank)")


def downgrade() -> None:
    op.execute(f"DROP MATERIALIZED VIEW IF EXISTS {VIEW_NAME}")
