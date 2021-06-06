const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json");

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}`
  );
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  const sum = Number(numberOfBugs) + 2;
  if (numberOfBugs < 200) {
    res.send(
      `<div><h1>${numberOfBugs} little bugs in the code</h1><a href="/bugs/${sum}">Pull one down, patch it around</a></div>`
    );
  } else {
    res.send(
      `<div><h1>${numberOfBugs} little bugs in the code</h1><a href="/bugs/">Too many bugs!! Start over!</a></div>`
    );
  }
});
app.get("/bugs", (req, res) => {
  res.send(
    `<div><h1>99 little bugs in the code</h1><a href="/bugs/101">Pull one down, patch it around</a></div>`
  );
});

app.get("/pokemon/search", (req, res) => {
  const { name } = req.query;
  let searchedPokemon = [];
  pokemon.forEach((singlePokemon, i) => {
    if (singlePokemon.name.toLowerCase() === name.toLowerCase()) {
      searchedPokemon.push(pokemon[i]);
    }
  });
  res.json(searchedPokemon);

  //   const pokemonName = pokemon.map((singlePokemon) => {
  //     return singlePokemon.name.toLowerCase();
  //   });

  //   res.json(pokemonName);

  //   if (pokemonName.indexOf(name.toLowerCase())) {
  //     const id = pokemonName.indexOf(name);
  //     // res.json(pokemon[id]);
  //   }else{
  //     res.json([])
  //   }
});

app.get("/pokemon/:index", (req, res) => {
  const { index } = req.params;
  if (pokemon[index]) {
    res.json(pokemon[index]);
  } else {
    res.send("Sorry, no pokemon found at 9001");
  }
});

app.get("/pokemon", (req, res) => {
  const singlePokemon = pokemon.map((singlePokemon) => {
    return singlePokemon.name;
  });
  res.json(pokemon);
});

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

module.exports = app;
