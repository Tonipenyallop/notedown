// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "notes",
      user: "taesukim",
      password: "",
      tableName: "migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      host: "ec2-34-198-31-223.compute-1.amazonaws.com",
      database: "db9s2f68tbgd2p",
      user: "lwakluhfitwqzq",
      password:
        "311f7e4b184ee254398b956bf5da4c1520616b0a99c903cb00721059248f7929",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
