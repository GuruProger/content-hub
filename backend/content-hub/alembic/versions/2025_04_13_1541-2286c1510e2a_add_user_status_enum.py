"""add_user_status_enum

Revision ID: 2286c1510e2a
Revises: 2cea66e32356
Create Date: 2025-04-13 15:41:31.131352

"""

from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = "2286c1510e2a"
down_revision: Union[str, None] = "2cea66e32356"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    # ### commands auto generated by Alembic - please adjust! ###
    account_status = sa.Enum("ACTIVE", "DELETED", "BANNED", name="account_status")
    account_status.create(op.get_bind())

    op.add_column(
        "user",
        sa.Column("status", account_status, nullable=False),
    )

    # ### end Alembic commands ###


def downgrade() -> None:
    """Downgrade schema."""
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column("user", "status")
    op.execute("DROP TYPE IF EXISTS account_status")
    # ### end Alembic commands ###
