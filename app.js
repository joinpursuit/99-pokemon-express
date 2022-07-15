//dependencies

const express = require("express");
const pokemon = require("./models/pokemon.json");

//config

const app = express();

//routes
app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get("/:v/:a/:n", (req, res) => {
  const { v, a, n } = req.params;
  res.send(`Congratulations on starting a new project called ${v}-${a}-${n}!`);
});

app.get("/bugs", (req, res) => {
  res.send(
    `<div>
      <h3>99 little bugs in the code</h3>
      <a href='/bugs/101'>pull one down, patch it around</a>
    </div>`
  );
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  if (numberOfBugs >= 200) {
    res.send(`Too many bugs!! Start over!`);
  } else {
    res.send(
      `<div>
        ${numberOfBugs} little bugs in the code  
         <a href='/bugs/${
           Number(numberOfBugs) + 2
         }'>Pull one down, patch it around</a></div>`
    );
  }
});

app.get("/pokemon", (req, res) => {
  res.json(pokemon);
});

app.get("/pokemon/search/", (req, res) => {
  const { name } = req.query;
  const found = pokemon.find(
    (e) => e.name.toLowerCase() === name.toLowerCase()
  );

  if (found) {
    res.send([found]);
  } else {
    res.send([]);
  }
});

app.get("/pokemon/:indexOfArray", (req, res) => {
  const { indexOfArray } = req.params;
  if (!pokemon[Number(indexOfArray)]) {
    res.send(`Sorry, no pokemon found at ${indexOfArray}`);
  } else {
    res.json(pokemon[indexOfArray]);
  }
});
//exports

module.exports = app;
