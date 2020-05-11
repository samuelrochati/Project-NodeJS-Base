const express = require("express");

const ExampleController = require("./controllers/ExampleController");

module.exports = ({ bot }) => {
  const routes = express.Router();

  routes.post("/example", ExampleController.create({ bot }));

  // bot.onText(
  //   /\/listexample/,
  //   ExampleController.handleBotList({ bot })
  // );

  // bot.onText(
  //   /\[ Ex\#\d{1,2} \] (.*)/,
  //   ExampleController.handleBotAction({ bot })
  // );

  return routes;
};
