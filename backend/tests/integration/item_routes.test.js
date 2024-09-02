const { Model } = require('objection');
const { db } = require('../../src/config/db'); 
const { Item } = require('../../src/models/item');
const Knex = require('knex');
const knexConfig = require('../../knexfile.cjs');

beforeAll(async () => {
  // Vincula o Objection.js ao Knex
  Model.knex(db);

   // Executa as migrações antes dos testes
  // const knex = Knex(knexConfig.test);
  await db.migrate.latest();
});

afterAll(async () => {
  // Desfaz as migrações e destrói a conexão
  await db.migrate.rollback();
  await db.destroy(); 
});

describe('Item Model', () => {
  it('should create a new item', async () => {
    const newItem = await Item.query().insert({
      name: 'Item de Teste',
      description: 'Descrição do item de teste',
    });

    expect(newItem).toHaveProperty('id');
    expect(newItem.name).toBe('Item de Teste');
  });
});
