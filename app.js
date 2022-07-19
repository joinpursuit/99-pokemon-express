const express = require("express");
const app = express();

const pokemon = require("./models/pokemon.json");

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;

  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

//bugs
app.get("/bugs", (req, res) => {
  res.send(`<h1>99 little bugs in the code</h1>
  <p><a href="/bugs/101">Pull one down, patch it around</a></p>`);
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
    const moreBugs = Number(numberOfBugs) + 2;
    if (numberOfBugs >= 200) {
      res.send(`<a href="/" >Too many bugs!! Start over!</a>`);
    } else {
      res.send(`${ numberOfBugs } little bugs in the code<a href="/${moreBugs} ">Pull one down, patch it around</a>`);
    }
});

//pokemon
app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});
app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

app.get("/pokemon/search", (req, res) => {
  const { name } = req.query;
  console.log(req.query);
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
});

app.get("/pokemon/:indexOfArray", (req, res) => {
  const { indexOfArray } = req.params;
  if (pokemon[indexOfArray]) {
    res.send(pokemon[indexOfArray]);
  } else {
    res.send(`Sorry, no pokemon found at ${indexOfArray}`);
  }
});

module.exports = app;
