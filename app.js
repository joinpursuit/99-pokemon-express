const express = require("express");
const app = express();
const poke = require("./models/pokemon.json");
const { res } = require("express");

app.get("/:verb/:noun/:adjective", (req, res) => {
  const { verb, noun, adjective } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${noun}-${adjective}!`
  );
});

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get("/bugs", (req, res) => {
  res.send(
    "99 little bugs in the code" +
      `<a href='http://localhost:8888/bugs/101'>Pull one down, patch it around</a>`
  );
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  if (numberOfBugs < 198) {
    res.send(
      `${numberOfBugs} little bugs in the code` +
        `<a href='http://localhost:8888/bugs/${
          Number(numberOfBugs) + 2
        }'>Pull one down, patch it around</a>`
    );
  } else if (numberOfBugs < 200) {
    res.send(
      `${numberOfBugs} little bugs in the code` +
        `/href.*201.*Pull one down, patch it around/`
    );
  } else res.send(`Too many bugs!! Start over!`);
});

app.get("/pokemon", (req, res) => {
  res.send(poke);
});

app.get("/pokemon/search", (req, res) => {
  res.send(
    poke.filter((obj) => {
      return obj.name.toLowerCase() === req.query.name.toLowerCase();
    })
  );
});

app.get("/pokemon/:index", (req, res) => {
  const { index } = req.params;
  if (!poke[index]) {
    res.send(`Sorry, no pokemon found at ${index}`);
  } else {
    res.send(poke[index]);
  }
});

module.exports = app;
