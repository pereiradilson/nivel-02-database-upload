# GoStack - Challenge: Database upload

## About

Creating a Node.js back-end to register transactions income and outcome and import csv file with database Postgres.

## Preview

<div align="center">
  <a href="https://youtu.be/DIZNBiQZ5Vw" target="_blank">
    <img src="https://ik.imagekit.io/rlpwchithd/Captura_de_Tela_2020-06-23_a_s_21.42.56_2C7D7cNu2.png">
  </a>
</div>

## Routes

|Method|Route|Description|
|------|-----|-----------|
|GET|/transactions|List all transactions with balance|
|POST|/transactions|Create a new transaction|
|DELETE|/transactions/:id|Delete a transaction|
|POST|/transactions/import|Import multiple transactions|

## Prerequisites

- [NodeJs](https://nodejs.org/en/download/)
- [Docker](https://www.docker.com/)

## Installing

```bash

  # Clone repository
  $ git clone https://github.com/pereiradilson/nivel-02-database-upload

  # Enter folder
  $ cd nivel-02-database-upload

  # Install dependences
  $ yarn

```

## Database config

```bash

  # Edit file ormconfig.json
  {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "",
    "password": "",
    "database": "",
    "entities": ["./src/models/*.ts"],
    "migrations": ["./src/database/migrations/*.ts"],
    "cli": {
      "migrationsDir": "./src/database/migrations"
    }
  }

```

## Execute project

```bash

  # Create tables
  $ yarn typeorm migration:run

  # Execute project
  $ yarn dev:server

```

## Running the tests

```bash

  # Execute tests
  $ yarn test

```

## Authors

* **Adilson Pereira** - [LinkedIn](https://www.linkedin.com/in/pereiradilson/)

## License

This project is licensed under the MIT License.
