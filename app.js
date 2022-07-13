const express = require("express");
const app = express();

const pokemon = require("./models/pokemon.json");
console.log(pokemon[0]);

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});
app.get("/bugs", (req, res) => {
  res.send(
    `
    <h1>99 little bugs in the code</h1>
    <a href="/bugs/101">pull one down, patch it around</a>`
  );
});
app.get("/bugs/:numberOfBugs", (req, res) => {
  let { numberOfBugs } = req.params;
  let bugs = Number(numberOfBugs);
  if (bugs < 200) {
    res.send(`
    <h1>${bugs} little bugs in the code</h1>
    <a href="/bugs/${(bugs += 2)}">Pull one down, patch it around</a>
    `);
  } else {
    res.send(`
    <h1>${bugs} little bugs in the code</h1>
    <a href=/bugs>Too many bugs!! Start over!</a>
    `);
  }
  res.send();
});
app.get("/jumping/:joyous/:jellybean", (req, res) => {
  const { joyous, jellybean } = req.params;

  res.send("New project made");
});

app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});
app.get("/pokemon/search", (req, res) => {
  const search = req.query.name;
  const foundPokemon = pokemon.find((p) => {
    return p.name.toLowerCase() === search.toLowerCase();
  });
  if (foundPokemon) {
    res.send([foundPokemon]);
  } else {
    res.send([]);
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

// app.listen(8888, () => {
//   console.log("Listening");
// });
