console.log('Loading knexfile configuration...');
module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: process.env.DB_HOST || "127.0.0.1",
      port: process.env.DB_PORT || 3306,
      user: process.env.DB_USER || "user",
      password: process.env.DB_PASSWORD || "password",
      database: process.env.DB_NAME || "topico_db",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations",
    },
  },

  test: {
    client: "mysql2",
    connection: {
      host: process.env.DB_HOST_TEST || "127.0.0.1",
      port: process.env.DB_PORT_TEST || 3307,
      user: process.env.DB_USER || "user",
      password: process.env.DB_PASSWORD || "password",
      database: process.env.DB_NAME_TEST || "topico_db_test",
      multipleStatements: true,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations",
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
};
