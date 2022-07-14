const express = require("express");
const pokemon = require("./models/pokemon.json");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;

  res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`);
});

app.get("/bugs", (req, res) => {
  res.send(`<h1>99 little bugs in the code</h1>
    <a href="http://localhost:8888/bugs/101">pull one down, pathc it around<a>
    `);
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  if (numberOfBugs >= 200) {
    res.send(
      `<a href="http://localhost:8888/bugs">Too many bugs!! Start over!</a>`
    );
  } else {
    res.send(`${numberOfBugs} little bugs in the code
        <a href="http://localhost:8888/bugs/${
          Number(numberOfBugs) + 2
        }">Pull one down, patch it around</a>
        `);
  }
});

app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

//http://localhost:8888/pokemon/search?name=Bulbasaur
app.get("/pokemon/search", (req, res) => {
  const { name } = req.query;
  let result = [];
  let foundPokemon = pokemon.find(
    (e) => e.name.toLowerCase() === name.toLowerCase()
  );

  if (foundPokemon === undefined) {
    res.send([]);
  } else {
    result.push(foundPokemon);
    res.send(result);
  }

  // if (name) {
  //     foundPokemon = pokemon.find(e => e.name === name)
  //     res.send(foundPokemon);
  // } else {
  //     res.send(foundPokemon);
  // }
});

app.get("/pokemon/:index", (req, res) => {
  const index = req.params.index;
  if (pokemon[index]) {
    res.send(pokemon[index]);
  } else {
    res.send(`Sorry, no pokemon found at ${index}`);
  }
});

module.exports = app;
