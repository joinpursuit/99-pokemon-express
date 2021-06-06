const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json");
// console.log(pokemon[0]);

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}`
  );
});

app.get("/bugs", (req, res) => {
  res.send(
    `<h1>99 little bugs in the code</h1> <a href='/bugs/101'>Pull one down, patch it around </a>`
  );
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  if (numberOfBugs > 199) {
    res.send(`<a href='/bugs'>Too many bugs!! Start over!<a/>`);
  } else {
    res.send(
      `<a href="/bugs/${
        Number(numberOfBugs) + 2
      }">Pull one down, patch it around</a> ${numberOfBugs} little bugs in the code`
    );
  }
});

app.get("/pokemon", (req, res) => {
  res.json(pokemon);
});

app.get("/pokemon/search", (req, res) => {
  const { name } = req.query;
  const specificPokemon = pokemon.find(
    (element) => name.toLowerCase() === element.name.toLowerCase()
  );
  if (specificPokemon) {
    res.send([specificPokemon]);
  } else {
    res.send([]);
  }
});

app.get("/pokemon/:index", (req, res) => {
  const { index } = req.params;
  if (pokemon[index]) {
    res.json(pokemon[index]);
  } else {
    res.send(`Sorry, no pokemon found at ${index}`);
  }
});

app.get("/");

module.exports = app;
