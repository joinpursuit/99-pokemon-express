const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json");

app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

app.get("/pokemon/:indexOfArray", (req, res) => {
  const { indexOfArray } = req.params;
  if(pokemon[indexOfArray]){
    res.send(pokemon[indexOfArray]);
  } else {
    res.send(`Sorry, no pokemon found at ${indexOfArray}`)
  }
});

app.get("/pokemon/search", (req, res) => {
  const { name } = req.query
  res.send(name)
})

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;

  if (numberOfBugs < 200) {
    res.send(`${numberOfBugs} little bugs in the code <a href=${`/bugs/${Number(numberOfBugs) + 2}`}>Pull one down, patch it around</a>`);
  } else {
    res.send(
     `<a href=${"/bugs"}>Too many bugs!! Start over!</a>`
    );
  }
});

app.get("/bugs", (req, res) => {
  res.send(
    `99 little bugs in the code <a href=${"/bugs/101"}>pull one down, patch it around</a>`
  );
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { adjective, verb, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}`
  );
});

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

module.exports = app;
