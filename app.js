const express = require("express");
const pokemon = require("./models/pokemon.json");

const app = express();

app.get("/jumping/joyous/jellybean", (req, res) => {
  res.send(
    "Congratulations on starting a new project called jumping-joyous-jellybean!"
  );
});

app.get("/bugs", (req, res) => {
  res.send(
    `<h1>99 little bugs in the code <a href="/bugs/:numberOfBugs">pull one down, patch it around</a></h1>`
  );
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  bugs2 = Number(numberOfBugs) + 2;

  if (numberOfBugs < 200) {
    res.send(`<h1>${numberOfBugs} little bugs in the code 
    <a href="/bugs/${bugs2}">Pull one down, patch it around</a><h1>`);
  } else if (numberOfBugs > 199) {
    res.send(`<h1><a href="/bugs/">Too many bugs!! Start over!</a><h1>`);
  } else {
    res.send(
      `<h1>${numberOfBugs} little bugs in the code <a href="/bugs/${numberOfBugs}">Pull one down, patch it around</a><h1>`
    );
  }
});

app.get("/", (req, res) => {
  res.send(`Welcome 99 Pokemon`);
});

app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

app.get("/pokemon/search", (req, res) => {
  const { name } = req.query;
  const pokeFind = pokemon.filter(
    (aPokemon) => aPokemon.name.toLowerCase() === name.toLowerCase()
  );
  res.send(pokeFind);
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
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}`
  );
});

module.exports = app;
