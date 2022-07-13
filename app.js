const express = require("express");
const app = express();

const pokemon = require("./models/pokemon.json");

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;

  if (parseInt(numberOfBugs) >= 200) {
    res.send(`<a href="/">Too many bugs!! Start over!</a>`);
  } else {
    res.send(
      `<a href="/bugs/${
        parseInt(numberOfBugs) + 2
      }">${numberOfBugs} little bugs in the code Pull one down, patch it around</a>`
    );
  }
});

app.get("/bugs", (req, res) => {
  res.send(
    `<h1>99 little bugs in the code</h1><a href="/bugs/101">pull one down, patch it around</a>`
  );
});

app.get("/pokemon", (req, res) => {
  res.json(pokemon);
});

app.get("/pokemon/search", (req, res) => {
  const { name } = req.query;
  const result = pokemon.find((pokemon) => {
    return pokemon.name.toLowerCase() === name.toLowerCase();
  });

  res.send(result ? [result] : []);
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

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

module.exports = app;
