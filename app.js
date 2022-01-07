const express = require("express");
const app = express();
const pokemons = require("./models/pokemon.json");

app.get("/", (request, response) => {
  response.send("Welcome 99 Pokemon");
});

// app.get("/:verb/:noun/:adjective", (request, response) => {
//   const { verb, noun, adjective } = request.params;
//   response.send(
//     `Congratulations on starting a new project called ${verb}-${noun}-${adjective}!`
//   );
// });

app.get("/bugs", (request, response) => {
  response.send(
    "<h1>99 little bugs in the code<h1/>" +
      `<a href='http://localhost:8888/bugs/101'>Pull one down, patch it around</a>`
  );
});

app.get("/bugs/:numberOfBugs", (request, response) => {
  const { numberOfBugs } = request.params;
  if (numberOfBugs < 198) {
    response.send(
      `${numberOfBugs} little bugs in the code` +
        `<a href='http://localhost:8888/bugs/${
          Number(numberOfBugs) + 2
        }'>Pull one down, patch it around</a>`
    );
  } else if (numberOfBugs < 200) {
    response.send(
      `${numberOfBugs} little bugs in the code` +
        `/href.*201.*Pull one down, patch it around/`
    );
  } else response.send(`Too many bugs!! Start over!`);
});

app.get("/pokemon", (request, response) => {
  response.send(pokemons);
});

app.get("/pokemon/search", (request, response) => {
  response.send(
    pokemons.filter((obj) => {
      return obj.name.toLowerCase() === request.query.name.toLowerCase();
    })
  );
});

app.get("/pokemon/:index", (request, response) => {
  const { index } = request.params;
  if (!pokemons[index]) {
    response.send(`Sorry, no pokemon found at ${index}`);
  } else {
    response.send(pokemons[index]);
  }
});

app.get("/:verb/:noun/:adjective", (request, response) => {
  const { verb, noun, adjective } = request.params;
  response.send(
    `Congratulations on starting a new project called ${verb}-${noun}-${adjective}!`
  );
});

module.exports = app;
