// DEPENDENCIES
const express = require("express");
const res = require("express/lib/response");
const pokemon = require("./models/pokemon.json");
const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get("/bugs", (req, res) => {
  res.send(
    '<h1>99 little bugs in the code</h1><a href="/bugs/101">pull one down, patch it around</a>'
  );
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  if (numberOfBugs >= 200) {
    res.send("Too many bugs!! Start over!");
  } else {
    res.send(`<p>${numberOfBugs} little bugs in the code</p>
              <a href="/bugs/${
                Number(numberOfBugs) + 2
              }">pull one down, patch it around</a>`);
  }
});

app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

app.get("/pokemon/search", (req, res) => {
  const { name } = req.query;
  const pokemonMatch = pokemon.filter(
    (el) => el.name.toLowerCase() === name.toLowerCase()
  );
  if (pokemonMatch.length > 0) res.send(pokemonMatch);
  else res.send([]);
});

app.get("/pokemon/:indexOfArray", (req, res) => {
  const { indexOfArray } = req.params;
  if (pokemon[indexOfArray]) {
    res.send(pokemon[indexOfArray]);
  } else {
    res.send(`Sorry, no pokemon found at ${indexOfArray}`);
  }
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

module.exports = app;
