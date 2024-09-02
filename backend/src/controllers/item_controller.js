const { db } = require("../config/db");

class ItemController {
  static async getAllItems(req, res) {
    try {
      const results = await db.select("*").from("items");
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Recuperar um item pelo ID
  static async getItemById(req, res) {
    const { id } = req.params;
    try {
      const results = await db.select("*").from("items").where({ id });
      res.json(results[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Criar um novo item
  static async createItem(req, res) {
    const { name, description } = req.body;
    try {
      const [id] = await db("items").insert({ name, description });
      res.status(201).json({ id, name, description });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Atualizar um item existente
  static async updateItem(req, res) {
    const { id } = req.params;
    const { name, description } = req.body;
    try {
      await db("items").where({ id }).update({ name, description });
      res.json({ id, name, description });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Deletar um item
  static async deleteItem(req, res) {
    const { id } = req.params;
    try {
      await db("items").where({ id }).del();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ItemController;
