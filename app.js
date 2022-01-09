// DEPENDENCIES
const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const pokemon = require("./models/pokemon.json");
// console.log(pokemon[0]);

// CONFIGURATION
const app = express();

// ROUTES
app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res
    .status(200)
    .send(
      `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
    );
});

// 99 Little Bugs In the Code
app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  if (Number(numberOfBugs) >= 200) {
    res.send(
      '<div>Too many bugs!! Start over!<h1><a href="http://localhost:8888/bugs/">pull one down</a></h1></div>'
    );
    return;
  } else {
    res.send(
      `<h1>${numberOfBugs} little bugs in the code</h1><a href='http://localhost:8888/bugs/${
        Number(numberOfBugs) + 2
      }'>Pull one down, patch it around</a>`
    );
  }
});

app.get("/bugs", (req, res) => {
  res.send(
    "<h1>99 little bugs in the code</h1><a href='http://localhost:8888/bugs/101'>pull one down, patch it around</a>"
  );
});

// POKE-EXPRESS
app.get("/pokemon-pretty/:indexArray", (req, res) => {
  const { indexArray } = req.params;

  let pokeArray = pokemon.filter((item, index) => {
    return Number(indexArray) === index;
  });

  res.send(
    `<div><div>${pokeArray[0].name}</div><div><img src="${pokeArray[0].img}"/></div><div>${pokeArray[0].misc.classification}</div></div>`
  );
});

app.get("/pokemon-pretty", (req, res) => {
  let pokeArrayList = pokemon.map((item, index) => {
    return `<li><a href="http://localhost:8888/pokemon-pretty/${index}">${item.name}</a></li>`;
  });
  res.send(
    `<div>
      <ul>${pokeArrayList.join(" ")}</ul>
    </div>`
  );
});

app.get("/pokemon/search", (req, res) => {
  const { name } = req.query;

  let searchPokemon = pokemon.filter((item) => {
    return item.name.toLowerCase() === name.toLowerCase();
  });

  if (searchPokemon) {
    res.send(searchPokemon);
  } else {
    res.send(`<h1>${name} Not Found Try Again</h1>`);
  }
});

app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

app.get("/pokemon/:indexOfArray", (req, res) => {
  const { indexOfArray } = req.params;
  if (indexOfArray > 150) {
    res.send(`Sorry, no pokemon found at ${indexOfArray}`);
  } else {
    res.send(pokemon[indexOfArray]);
  }
});

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

// EXPORT
module.exports = app;
