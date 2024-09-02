exports.up = function(knex) {
    return knex.schema.createTable('items', function(table) {
      table.increments('id'); // id auto-incremento
      table.string('name', 255).notNullable(); // coluna name com varchar(255)
      table.text('description'); // coluna description com tipo texto
      table.timestamp('created_at').defaultTo(knex.fn.now()); // coluna created_at com timestamp atual como padrão
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('items'); // comando para reverter a migração
  };
  