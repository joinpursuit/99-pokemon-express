const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json");


app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});
app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params
  res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}`);
});
app.get("/bugs", (req, res) => {
  let message = `<h1>99 little bugs in the code</h1>
 <a href='/bugs/101'> Pull One Down, Patch It Around</a>`;

  res.send(message);
});
app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  let message = `${numberOfBugs} little bugs in the code <a href='/bugs/${Number(numberOfBugs) + 2
    }'>Pull one down, patch it around</a>`;
  if (numberOfBugs <= 199) {
    res.send(message);
  } else {
    res.send(`Too many bugs!! Start over! <a href='/bugs'>Start over</a>`);
  }
});
app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});
app.get("/pokemon/search", (req, res) => {
  const { name } = req.query;
  const getPokemon = pokemon.find(eachPokemon => eachPokemon.name.toLowerCase() == name.toLowerCase())
  if (getPokemon) {
    res.send([getPokemon])
  } else {
    res.send([])
  }
  console.log(getPokemon)
});
app.get("/pokemon/:indexOfArray", (req, res) => {
  const { indexOfArray } = req.params;
  if (indexOfArray > pokemon.length || indexOfArray < 0) {
    res.send("Sorry, no pokemon found at 9001")
  } else {
    res.send(pokemon[indexOfArray])
  }
});

module.exports = app;
//http://localhost:8888/pokemon/search?name=oddish

