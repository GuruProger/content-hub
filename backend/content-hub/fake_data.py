import asyncio
import random
from typing import List

from faker import Faker
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from api.auth.auth_utils import hash_password
from core.models import (
    Article,
    ArticleTag,
    Comment,
    LikeArticle,
    LikeComment,
    Tag,
    User,
    db_helper,
)
from core.models.user import AccountStatus

# Initialize Faker for generating realistic data
fake = Faker()
fake.password()
# Generation settings
NUM_USERS = 20
NUM_ARTICLES_PER_USER = (0, 5)  # Range of articles per user
NUM_COMMENTS_PER_ARTICLE = (0, 10)  # Range of comments per article
LIKE_PROBABILITY = 0.7  # Probability of liking an article/comment
TAG_POOL = [
    "python",
    "fastapi",
    "sqlalchemy",
    "async",
    "backend",
    "frontend",
    "javascript",
    "react",
    "vue",
    "database",
    "docker",
    "kubernetes",
    "devops",
    "testing",
    "ai",
    "ml",
    "datascience",
    "web",
    "mobile",
    "security",
]
MAX_TAGS_PER_ARTICLE = 5


async def create_fake_tags(session: AsyncSession) -> List[Tag]:
    """Creates tags from the TAG_POOL"""
    tags = []
    for tag_name in TAG_POOL:
        # Check if the tag already exists
        existing_tag = await session.execute(select(Tag).where(Tag.name == tag_name))
        if not existing_tag.scalar_one_or_none():
            tag = Tag(name=tag_name)
            session.add(tag)
            tags.append(tag)

    if tags:  # Only if there are tags to add
        await session.commit()
    return tags


async def create_fake_users(session: AsyncSession) -> List[User]:
    """Creates fake users"""
    users = []
    for _ in range(NUM_USERS):
        user = User(
            username=fake.unique.user_name(),
            email=fake.unique.email(),
            password=hash_password(fake.password(length=12, special_chars=False)),
            bio=fake.text(max_nb_chars=200) if random.random() > 0.3 else None,
            status=random.choice(list(AccountStatus)),
            created_at=fake.date_time_between(start_date="-1y"),
            is_admin=random.random() < 0.1,
            rating=random.randint(0, 100),
            avatar=None,
        )
        session.add(user)
        users.append(user)

    await session.commit()
    return users


async def create_fake_articles(
    session: AsyncSession, users: List[User], tags: List[Tag]
) -> List[Article]:
    """Creates fake articles for users"""
    articles = []
    for user in users:
        num_articles = random.randint(*NUM_ARTICLES_PER_USER)
        for _ in range(num_articles):
            article = Article(
                title=fake.sentence(nb_words=6),
                content=fake.text(max_nb_chars=2000),
                user_id=user.id,
                is_published=random.choice([True, False]),
                rating=random.uniform(0, 5),
                created_at=fake.date_time_between(start_date=user.created_at),
            )
            session.add(article)
            await session.flush()  # Get article ID before creating relationships

            articles.append(article)

            # Add random tags to the article, only if tags exist
            if tags:
                num_tags = random.randint(1, min(MAX_TAGS_PER_ARTICLE, len(tags)))
                selected_tags = random.sample(tags, k=num_tags)
                for tag in selected_tags:
                    article_tag = ArticleTag(article_id=article.id, tag_id=tag.id)
                    session.add(article_tag)

    await session.commit()
    return articles


async def create_fake_comments(
    session: AsyncSession, users: List[User], articles: List[Article]
) -> List[Comment]:
    """Creates fake comments for articles"""
    comments = []
    for article in articles:
        num_comments = random.randint(*NUM_COMMENTS_PER_ARTICLE)
        for _ in range(num_comments):
            commenter = random.choice(users)
            comment = Comment(
                content=fake.text(max_nb_chars=300),
                article_id=article.id,
                user_id=commenter.id,
                created_at=fake.date_time_between(start_date=article.created_at),
            )
            session.add(comment)
            comments.append(comment)

    await session.commit()
    return comments


async def create_fake_likes(
    session: AsyncSession,
    users: List[User],
    articles: List[Article],
    comments: List[Comment],
):
    """Creates fake likes for articles and comments"""
    # Article likes
    for article in articles:
        for user in users:
            if random.random() < LIKE_PROBABILITY and user.id != article.user_id:
                like = LikeArticle(
                    article_id=article.id,
                    user_id=user.id,
                    created_at=fake.date_time_between(start_date=article.created_at),
                )
                session.add(like)

    # Comment likes
    for comment in comments:
        for user in users:
            if user.id != comment.user_id and random.random() < LIKE_PROBABILITY:
                like = LikeComment(
                    comment_id=comment.id,
                    user_id=user.id,
                    created_at=fake.date_time_between(start_date=comment.created_at),
                )
                session.add(like)

    await session.commit()


async def main():
    print("Starting data generation...")

    async with db_helper.session_factory() as session:
        print("Creating tags...")
        tags = await create_fake_tags(session)
        print(f"Created {len(tags)} tags")

        if not tags:
            print(
                "Warning: No tags were created. Check if they already exist in the database."
            )

        print("Creating users...")
        users = await create_fake_users(session)
        print(f"Created {len(users)} users")

        print("Creating articles with tags...")
        articles = await create_fake_articles(session, users, tags)
        print(f"Created {len(articles)} articles")

        print("Creating comments...")
        comments = await create_fake_comments(session, users, articles)
        print(f"Created {len(comments)} comments")

        print("Creating likes...")
        await create_fake_likes(session, users, articles, comments)
        print("Created likes")

        print("Data generation completed successfully!")


if __name__ == "__main__":
    asyncio.run(main())
