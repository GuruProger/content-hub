### How to run?

create `.env` from [.env.example](backend/.env.example) in backend dir.

run:
```
docker compose --env-file ./backend/.env  up
```

### How to run frontend?

## With Docker:

go to frontend folder.

run:
```bash
docker compose up --build
```

## If Docker isn't your way:
Make sure to install dependencies:

```bash
yarn install
```

or

```bash
yarn
```

# Development Server

Start the development server on `http://localhost:3000`:

```bash
yarn dev
```

# Production

Build the application for production:

```bash
# yarn
yarn build
```

Locally preview production build:

```bash
yarn preview
```
