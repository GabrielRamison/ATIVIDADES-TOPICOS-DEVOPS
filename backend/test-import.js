const knex = require('@/config/db');
console.log(knex.client.config.connection);
