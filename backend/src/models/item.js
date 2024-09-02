const { Model } = require("objection");

class Item extends Model {
  // Nome da tabela no banco de dados
  static get tableName() {
    return "items";
  }

  // Definindo os campos da tabela
  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "description"],

      properties: {
        id: { type: "integer" },
        name: { type: "string", minLength: 1, maxLength: 255 },
        description: { type: "string", minLength: 1, maxLength: 1000 },
        created_at: { type: "string", format: "date-time" },
        updated_at: { type: "string", format: "date-time" }
      }
    };
  }

  // Relacionamentos (se houver)
  static get relationMappings() {
    return {
      // Exemplo de relacionamento
      // user: {
      //   relation: Model.BelongsToOneRelation,
      //   modelClass: require('./User'),
      //   join: {
      //     from: 'items.user_id',
      //     to: 'users.id'
      //   }
      // }
    };
  }
}

module.exports.Item = Item;
