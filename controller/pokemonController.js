const express = require("express");
const pokemon = express.Router();
const pokemonArray = require("../models/pokemon.json");

pokemon.get("/", (req, res) => {
  res.json(pokemonArray);
});

pokemon.get("/search", (req, res) => {
  const { name } = req.query;
  res.json(
    pokemonArray.filter((pokemons) => {
      return pokemons.name.toUpperCase() === name.toUpperCase();
    }),
  );
});

pokemon.get("/:indexOfArray", (req, res) => {
  const { indexOfArray } = req.params;
  if (pokemonArray[indexOfArray]) {
    res.send(pokemonArray[indexOfArray]);
  } else {
    res.send(`Sorry, no pokemon found at ${indexOfArray}`);
  }
});

module.exports = pokemon;
