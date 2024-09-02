const knex = require('@/config/db');


(async () => {
  try {
    await knex.migrate.rollback(); // Reverte todas as migrações aplicadas
    await knex.migrate.latest();   // Aplica as migrações mais recentes
    console.log('Migrações aplicadas com sucesso.');
    process.exit(0); // Termina o processo com sucesso
  } catch (error) {
    console.error('Erro ao aplicar migrações:', error);
    process.exit(1); // Termina o processo com erro
  }
})();

console.log('Banco de dados:', knex.client.config.connection);

