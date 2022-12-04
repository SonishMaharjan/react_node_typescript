import knex from "knex";

const config = require("../../knexfile");

const postgresProvider = knex(config.development);

export default postgresProvider;
