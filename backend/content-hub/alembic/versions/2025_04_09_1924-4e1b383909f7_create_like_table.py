"""create like table

Revision ID: 897eb2f134b9
Revises: 1f6753ff0212
Create Date: 2025-04-09 19:12:43.152977

"""

from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

revision: str = "897eb2f134b9"
down_revision: Union[str, None] = "1f6753ff0212"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table(
        "likes",
        sa.Column("article_id", sa.Integer(), nullable=False),
        sa.Column("user_id", sa.Integer(), nullable=False),
        sa.Column("created_at", postgresql.TIMESTAMP(timezone=True), server_default=sa.text("now()"), nullable=False),
        sa.ForeignKeyConstraint(["user_id"], ["users.id"], name=op.f("fk_likes_user_id_users")),
        sa.PrimaryKeyConstraint("article_id", "user_id", name=op.f("pk_likes")),
    )
    op.alter_column(
        "users",
        "password_hash",
        existing_type=sa.LargeBinary(length=60),
        type_=sa.VARCHAR(length=255),
        postgresql_using="encode(password_hash::bytea, 'hex')",
        existing_nullable=False,
    )
    op.alter_column(
        "users",
        "role",
        existing_type=postgresql.ENUM("USER", "ADMIN", name="user_role"),
        nullable=True,
    )


def downgrade() -> None:
    op.alter_column(
        "users",
        "role",
        existing_type=postgresql.ENUM("USER", "ADMIN", name="user_role"),
        nullable=False,
    )
    op.alter_column(
        "users",
        "password_hash",
        existing_type=sa.VARCHAR(length=255),
        type_=sa.LargeBinary(length=60),
        postgresql_using="decode(password_hash, 'hex')",
        existing_nullable=False,
    )
    op.drop_table("likes")
