const express = require("express");
const pokemon = require("./models/pokemon.json");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get("/pokemon", (req, res) => {
  res.json(pokemon);
});

app.get("/pokemon/search", (req, res) => {
  const { name } = req.query;
  const search = pokemon.find(
    (el) => el.name.toLowerCase() === name.toLowerCase()
  );
  if (!search) {
    res.send([]);
  } else {
    res.send([search]);
  }
});

app.get("/pokemon/:indexOfArray", (req, res) => {
  const { indexOfArray } = req.params;
  if (pokemon[indexOfArray]) {
    res.send(pokemon[indexOfArray]);
  } else {
    res.send(`Sorry, no pokemon found at ${indexOfArray}`);
  }
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;

  if (numberOfBugs < 200) {
    res.send(`<h3>${numberOfBugs} little bugs in the code</h3>
      <strong>${numberOfBugs} little bugs</strong>
      <a href='/bugs/${
        Number(numberOfBugs) + 2
      }'>Pull one down, patch it around</a>`);
  } else {
    res.send(`Too many bugs!! Start over!' <a href='/bugs/'>Start over</a>`);
  }
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;

  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}`
  );
});

app.get("/bugs", (req, res) => {
  res.send(`<h1>99 little bugs in the code</h1> 
  <strong>99 little bugs</strong>
  <a href=/bugs/101>Pull one down, Patch it around</a>`);
});

module.exports = app;
