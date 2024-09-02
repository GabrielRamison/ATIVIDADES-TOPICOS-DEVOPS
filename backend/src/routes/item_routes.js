const express = require ('express');
const  ItemController  =  require ('../controllers/item_controller.js');
const routes = express.Router();


routes.get("/items", ItemController.getAllItems);
routes.get("/items/:id", ItemController.getItemById);
routes.post("/items", ItemController.createItem);
routes.put("/items/:id", ItemController.updateItem);
routes.delete("/items/:id", ItemController.deleteItem);

module.exports = routes;