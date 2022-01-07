const { request } = require("express");
const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json");

app.get("/", (request, response) => {
  console.log("GET request received to route: /");
  response.send("Welcome 99 Pokemon");
});

app.get("/:verb/:adjective/:noun", (request, response) => {
  const { verb, adjective, noun } = request.params;
  response.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

app.get("/bugs/:numberOfBugs", (request, response) => {
  response.send("99 little bugs in the code ", "99 little bugs");
});

module.exports = app;
