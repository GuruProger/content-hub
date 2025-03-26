import os


def generate_postgres_db_url(test: bool = False) -> str:
	"""Creating a PostgreSQL database connection URL"""
	if not test:
		db_config = {
			'user': os.getenv('POSTGRES_USER'),
			'password': os.getenv('POSTGRES_PASSWORD'),
			'host': os.getenv('POSTGRES_HOST'),
			'port': os.getenv('POSTGRES_PORT'),
			'db': os.getenv('POSTGRES_DB')
		}
	else:
		db_config = {
			'user': os.getenv('TEST_POSTGRES_USER'),
			'password': os.getenv('TEST_POSTGRES_PASSWORD'),
			'host': os.getenv('TEST_POSTGRES_HOST'),
			'port': os.getenv('POSTGRES_PORT'),
			'db': os.getenv('TEST_POSTGRES_DB')
		}



	db_url: str = \
		(
			f"postgresql+asyncpg://{db_config['user']}:"
			f"{db_config['password']}@{db_config['host']}:"
			f"{db_config['port']}/{db_config['db']}"
		)
	return db_url
