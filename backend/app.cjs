const express = require("express");
const bodyParser = require("body-parser");
const { Model } = require("objection");
const routes = require("./src/routes/item_routes.js");
const db = require("./src/config/db.js");

require('module-alias/register');
const app = express();
const port = process.env.PORT || 3000;

Model.knex(db);

app.use(bodyParser.json());

app.use("/api", routes);
/* eslint-disable-next-line no-unused-vars */
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Se não estiver em ambiente de teste, iniciar o servidor
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

//const server = app.listen(port);


module.exports = { app };
//module.exports = { app, server };
