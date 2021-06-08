const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json");

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

app.get("/pokemon/search", (req, res) => {
  const name = req.query.name.toLowerCase();
  const result = pokemon.filter((poke) => poke.name.toLowerCase() === name);
  res.send(result);
});

app.get("/pokemon/:indexOfArray", (req, res) => {
  const { indexOfArray } = req.params;
  if (pokemon[indexOfArray]) {
    res.send(pokemon[indexOfArray]);
  } else {
    res.send(`Sorry, no pokemon found at ${indexOfArray}`);
  }
});

app.get("/bugs", (req, res) => {
  res.send(
    `99 little bugs in the code <br>
    99 little bugs <br>
    <a href="/bugs/101">
        Pull one down <br>
        Patch it around <br>
    </a>
    101 bugs in the code <br>`
  );
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  if (numberOfBugs < 200) {
    res.send(`${numberOfBugs} little bugs in the code <br>
    ${numberOfBugs} little bugs <br>
    <a href="/bugs/${Number(numberOfBugs) + 2}">
        Pull one down, <br>
        Patch it around <br>
    </a>
    ${Number(numberOfBugs) + 2} bugs in the code <br>
    [/href.*${Number(numberOfBugs) + 2}.*Pull one down\, patch it around/]
    `);

  } else {
    res.send(`${numberOfBugs} little bugs in the code <br>
        ${numberOfBugs} little bugs <br>
        <a href="/bugs/">
        Too many bugs!! Start over! <br>
        </a>
        ${Number(numberOfBugs) + 2} bugs in the code <br>
        `);
  }
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}`
  );
});

module.exports = app;
