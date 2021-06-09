const express = require("express");
const bugsController = require("./controller/bugsController.js");
const pokemonController = require("./controller/pokemonController.js");

const app = express();

app.get("/", (req, res) => {
  res.send(`Welcome 99 Pokemon`);
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}`,
  );
});

app.use("/bugs", bugsController);

app.use("/pokemon", pokemonController);

module.exports = app;
