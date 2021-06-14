const { response } = require("express");
const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json");
console.log(pokemon[0]);

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
  res.send(`<h1>99 little bugs in the code</h1>
    <a href="/bugs/101"> pull one down </a>`);
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  if (numberOfBugs < 200) {
    res.send(`${numberOfBugs} little bugs in the code
        <a href="/bugs/${
          Number(numberOfBugs) + Number(2)
        }"> Pull one down, patch it around </a>`);
  } else {
    res.send(`<a href="/bugs">Too many bugs!! Start over!</a>`);
  }
});

app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

app.get("/pokemon/search?", (req, res) => {
  const { name } = req.query;
  res.json(
    pokemon.filter((poke) => {
      return (
        poke.name === name ||
        poke.name.toLowerCase() === name.toLowerCase()
      );
    })
  );
});

app.get("/pokemon/:indexOfArray", (req, res) => {
    const { indexOfArray } = req.params;
    if (pokemon[indexOfArray]) {
        res.json(pokemon[indexOfArray])
    } else {
        res.send(`Sorry, no pokemon found at ${indexOfArray}`)
    }
})

module.exports = app;
