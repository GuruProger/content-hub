"""add like_article and like_comment tables

Revision ID: d692800f8637
Revises: 902ffdf2b5da
Create Date: 2025-05-09 22:23:52.650898

"""

from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = "d692800f8637"
down_revision: Union[str, None] = "902ffdf2b5da"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table(
        "like_article",
        sa.Column("article_id", sa.Integer(), nullable=False),
        sa.Column("user_id", sa.Integer(), nullable=False),
        sa.Column(
            "created_at", sa.DateTime(), server_default=sa.text("now()"), nullable=False
        ),
        sa.ForeignKeyConstraint(
            ["article_id"],
            ["article.id"],
            name=op.f("fk_like_article_article_id_article"),
        ),
        sa.ForeignKeyConstraint(
            ["user_id"], ["user.id"], name=op.f("fk_like_article_user_id_user")
        ),
        sa.PrimaryKeyConstraint("article_id", "user_id", name=op.f("pk_like_article")),
    )
    op.create_table(
        "like_comment",
        sa.Column("comment_id", sa.Integer(), nullable=False),
        sa.Column("user_id", sa.Integer(), nullable=False),
        sa.Column(
            "created_at", sa.DateTime(), server_default=sa.text("now()"), nullable=False
        ),
        sa.ForeignKeyConstraint(
            ["comment_id"],
            ["comment.id"],
            name=op.f("fk_like_comment_comment_id_comment"),
        ),
        sa.ForeignKeyConstraint(
            ["user_id"], ["user.id"], name=op.f("fk_like_comment_user_id_user")
        ),
        sa.PrimaryKeyConstraint("comment_id", "user_id", name=op.f("pk_like_comment")),
    )
    op.alter_column(
        "article",
        "rating",
        existing_type=sa.REAL(),
        type_=sa.Float(precision=2),
        existing_nullable=False,
    )
    # ### end Alembic commands ###


def downgrade() -> None:
    """Downgrade schema."""
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column(
        "article",
        "rating",
        existing_type=sa.Float(precision=2),
        type_=sa.REAL(),
        existing_nullable=False,
    )
    op.drop_table("like_comment")
    op.drop_table("like_article")
    # ### end Alembic commands ###
