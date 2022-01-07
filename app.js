const express = require("express");
const app = express();
const pokemon = require("./models/pokemon");

app.get("/", (request, response) => {
  response.send("Welcome 99 Pokemon");
});

app.get("/:verb/:adjective/:noun", (request, response) => {
  const { verb, adjective, noun } = request.params;
  response.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}`
  );
});

app.get("/bugs", (request, response) => {
  response.send("99 little bugs in the code");
});

app.get("/bugs/:numberOfBugs", (request, response) => {
  const { numberOfBugs } = request.params;
  if (numberOfBugs < 200) {
    response.send(
      `${numberOfBugs} little bugs in the code <a href=/bugs/${
        Number(numberOfBugs) + 2
      }> Pull one down, patch it around</a>`
    );
  } else {
    response.send("<a href=/bugs>Too many bugs!! Start over!</a>");
  }
});

app.get("/pokemon", (request, response) => {
  response.send(pokemon);
});

app.get("/pokemon/search?", (request, response) => {
  const { name } = request.query;
  if (!pokemon) return [];
  response.send(
    pokemon.filter((pkmon) =>
      pkmon.name.toLowerCase().includes(name.toLowerCase())
    )
  );
});

module.exports = app;
