# Nurse Management

Thie is back-end for Nurse Management.

## Running application

In the project directory, you can do following to run the application:

 * Clone and download the repo

 * Run `yarn` in root directory of the backend application to install dependencies

 * Create `config` folder from `config.example` and set all the variables in file inside the folder.

 * Run `knex migrate:make migration_name ` to create migration file and run `knex migrate:latest` (DB should be connected and knex should be installed globally)

 * Do `yarn dev` to run the application

 * `yarn test` to run unit testing


