const express = require("express");

const app = express();

const pokemon = require("./models/pokemon.json");
// console.log(pokemon[0]);

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

app.get("/pokemon/search", (req, res) => {
  let { name } = req.query;
  let foundPoke = pokemon.find(
    (pkmon) => pkmon.name.toLowerCase() === name.toLowerCase()
  );
  if (foundPoke) {
    res.send([foundPoke]);
  } else {
    res.send([]);
  }
});

app.get("/pokemon/:indexOfArray", (req, res) => {
  let { indexOfArray } = req.params;

  if (indexOfArray < pokemon.length) {
    res.send(pokemon[indexOfArray]);
  } else {
    res.send(`Sorry, no pokemon found at ${indexOfArray}`);
  }
});

app.get("/bugs", (req, res) => {
  res.send(`<h1>99 little bugs in the code</h1>
  <a href="/bugs/101">Pull one down, patch it around</a>`);
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  let { numberOfBugs } = req.params;

  if (numberOfBugs < 200) {
    res.send(
      `<h1>${numberOfBugs} little bugs in the code</h1>
      <a href="/bugs/${
        Number(numberOfBugs) + 2
      }">Pull one down, patch it around</a>`
    );
  } else {
    res.send(
      `<h1>${numberOfBugs} little bugs in the code</h1>
    <a href="/bugs">Too many bugs!! Start over!</a>`
    );
  }
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

module.exports = app;
