//DEPENDENCIES
const express = require("express");
const pokemon = require("./models/pokemon.json");

//CONFIG
const app = express();

// GENERATOR/running/happy/sandwich
app.get("/", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

// LITTLE BUGS
app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get("/bugs", (req, res) => {
  res.send("<h2>99 little bugs in the code</h2>");
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  if (numberOfBugs < 200) {
    res.send(
      `${numberOfBugs} little bugs in the code <a href=/bugs/${
        Number(numberOfBugs) + 2
      }>Pull one down, patch it around.</a>`
    );
    return;
  } else {
    res.send("Too many bugs!! Start over!");
  }
});

app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

app.get("/pokemon/search", (req, res) => {
  const { name } = req.query;
  res.send(
    pokemon.filter(
      (singlePokemon) => singlePokemon.name.toLowerCase() === name.toLowerCase()
    )
  );
});

app.get("/pokemon/:index", (req, res) => {
  const { index } = req.params;
  if (pokemon[index]) {
    res.send(pokemon[index]);
  } else {
    res.send(`Sorry, no pokemon found at ${index}`);
  }
});

module.exports = app;
