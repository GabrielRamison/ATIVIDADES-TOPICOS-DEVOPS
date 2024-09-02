const request = require('supertest');
const { app } = require('../../app.cjs'); // Não importa o server inicialmente
const {knex} = require('../../src/config/db');

let server; 

describe('Items API', () => {
  beforeAll(async () => {
    server = app.listen(0); 
    await knex.migrate.latest();
  });

  afterAll(async () => {
    await knex.migrate.rollback();
    console.log('Fechando conexão do Knex...');
    await knex.destroy();
    console.log('Conexão do Knex fechada.');
  
    if (server) {
      await new Promise((resolve, reject) => {
        server.close((err) => {
          if (err) return reject(err);
          resolve();
        });
      });
    }
  });
  
  beforeEach(async () => {
    await knex('items').truncate(); // Limpa a tabela antes de cada teste
  });

  it('should create a new item', async () => {
    const response = await request(server)
      .post('/api/items')
      .send({
        name: 'Item de Teste',
        description: 'Descrição do item de teste',
      });

    console.log(response.body);
    expect(response.statusCode).toBe(201);
    expect(response.body.name).toBe('Item de Teste');
  });

  it('should fetch all items', async () => {
    await request(server)
      .post('/api/items')
      .send({
        name: 'Item de Teste',
        description: 'Descrição do item de teste',
      });

    const response = await request(server).get('/api/items');

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });
});
