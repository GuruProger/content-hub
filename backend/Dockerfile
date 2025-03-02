FROM python:3.12-slim

WORKDIR /app

COPY pyproject.toml poetry.lock ./

RUN pip install poetry==2.1.1

# Installing project dependencies
RUN poetry config virtualenvs.create false && poetry install --no-root

COPY . .


CMD ["poetry", "run", "python", "content-hub/main.py"]
