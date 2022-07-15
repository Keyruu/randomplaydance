# Backend Stack

## Daisuki DB

- Start postgres

```sh
cd docker/daisuki

cp .env.example .env

docker network create daisuki

docker compose up -d
```

- Migrate current database from Daisuki

```sh
cd mariadb

cp .env.example .env

docker compose up
```

Cancel the docker compose after the pgloader exited with an exit code 0

## Hasura + Keycloak + Hasura Storage

You need to have the [hasura cli](https://hasura.io/docs/latest/graphql/core/hasura-cli/install-hasura-cli/) installed!

- Start Hasura stack

```sh
cd docker

cp .env.example .env

docker compose up -d
```

- Apply Migration

```sh
cd ..

hasura migrate apply --all-databases --envfile docker/.env
```

- Apply Metadata

```sh
hasura metadata apply --envfile docker/.env
```

- Start Hasura Console

```sh
hasura console --envfile docker/.env
```

The following endpoints are now exposed:

- `http://localhost:9695`: Hasura Console
- `http://localhost:1337/keycloak`: Keycloak
- `http://localhost:1337/v1/graphql`: Hasura GraphQL endpoint
- `http://localhost:1337/v1/storage`: Hasura Storage

- `http://localhost:9090`: Traefik dashboad
- `http://localhost:8025`: Mailhog SMTP testing dashboard
