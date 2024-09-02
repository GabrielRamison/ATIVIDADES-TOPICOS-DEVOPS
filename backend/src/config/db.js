const knex = require("knex");
const knexfile = require("../../knexfile.cjs");

// Determine o ambiente atual (por padrão, "development")
const environment = process.env.NODE_ENV || "development";

// Carrega a configuração correspondente ao ambiente
const config = knexfile[environment];

// Inicializa o Knex com a configuração apropriada
const db = knex(config);

module.exports.db = db;
module.exports.knex = db;
module.exports.environment = environment;
