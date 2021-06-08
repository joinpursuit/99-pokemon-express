// Dependencies
const express = require("express");
const pokemon = require("./models/pokemon.json");
console.log(pokemon[0]);

// Configuration
const app = express();

// Routes
app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get("/bugs", (req, res) => {
  res.send(`
    <h1>99 little bugs in the code</h1>
    <a href="/bugs/101">Pull one down, patch it around</a>
  `);
});

app.get("/pokemon", (req, res) => {
  let pokeMap = pokemon.map((elem) => {
    return elem;
  });
  res.send(pokeMap);
});

app.get("/pokemon/search", (req, res) => {
  const { name } = req.query;
  if (
    pokemon.find((elem) => elem.name.toLowerCase() === name.toLowerCase()) ===
    undefined
  ) {
    res.send([]);
  } else {
    let pokeFind = pokemon.find(
      (elem) => elem.name.toLowerCase() === name.toLowerCase()
    );
    res.send([pokeFind]);
  }
});

app.get("/pokemon/:indexOfArray", (req, res) => {
  if (
    isNaN(req.params.indexOfArray) ||
    pokemon[req.params.indexOfArray] === undefined
  ) {
    res.send(`Sorry, no pokemon found at ${req.params.indexOfArray}`);
  } else {
    res.send(pokemon[req.params.indexOfArray]);
  }
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  if (Number(req.params.numberOfBugs) < 200) {
    res.send(`
    <h1>${req.params.numberOfBugs} little bugs in the code</h1>
     <a href=${
       Number(req.params.numberOfBugs) + 2
     }>Pull one down, patch it around</a>
     <a href="/pokemon">next</a>
    `);
  } else {
    res.send(`
    <a href="/bugs">Too many bugs!! Start over!</a>
  `);
  }
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  res.send(
    `Congratulations on starting a new project called ${req.params.verb}-${req.params.adjective}-${req.params.noun}`
  );
});

// Export
module.exports = app;
