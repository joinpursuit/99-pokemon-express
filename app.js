const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json");

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulation on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

app.get("/bugs", (req, res) => {
  res.send(
    "<p>99 little bugs in the code<p/>" +
      `<a href='http://localhost:8888/bugs/101'>Pull one down \nPatch it around</a>`
  );
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  if (numberOfBugs < 200) {
    res.send(
      `<p>${numberOfBugs} little bugs in the code<p/>` +
        `<a href='http://localhost:8888/bugs/${
          Number(numberOfBugs) + 2
        }'>Pull one down \nPatch it around</a>`
    );
  } else
    res.send(
      `<p>${numberOfBugs} little bugs in the code<p/>` +
        `<a href='http://localhost:8888/bugs'>Start over</a>`
    );
});

app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

app.get("/pokemon/search", (req, res) => {
  console.log(req.query);
  res.send(
    pokemon.filter((obj) => {
      return obj.name.toLowerCase() === req.query.name.toLowerCase();
    })
  );
});

app.get("/pokemon/:indexOfArray", (req, res) => {
  res.send(
    pokemon[req.params.indexOfArray]
      ? pokemon[req.params.indexOfArray]
      : `sorry, no pokemon found at /pokemon [${req.params.indexOfArray}]`
  );
});

module.exports = app;
