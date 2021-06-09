const express = require('express');
const pokemon = express.Router();
const pokemonArr = require("./pokemon.json")

pokemon.get("/", (req, res) => {
    res.json(pokemonArr);
})

pokemon.get("/search", (req, res) => {
    const { name } = req.query;
    res.json(
        pokemonArr.filter((pokemons) => {
            return pokemons.name.toLocaleUpperCase() === name.toUpperCase()
    })
  )
})

pokemon.get("/:indexOfArray", (req, res) => {
    const { indexOfArray } = req.params;
    if (pokemonArr[indexOfArray]) {
        res.send(pokemonArr[indexOfArray])
    } else {
        res.send(`Sorry, no pokemon found at ${indexOfArray}`)
    }

})

module.exports = pokemon;
