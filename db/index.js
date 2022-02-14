const knex = require("knex");

const config =
  process.env.NODE_ENV === "production" ? "production" : "development";

const mode = require("../knexfile")[config];

const db = knex(mode);

module.exports = db;
