const express = require("express")
const pokemonRouter = express.Router()
const pokemon = require("../models/pokemon.json");

pokemonRouter.get("/", (req, res) => {
    console.log("Get Pokemon")
    res.send(pokemon)
})

pokemonRouter.get("/search", (req, res) => {
    console.log("Get my POKEMONNNN")
    const {name} = req.query

    const result = pokemon.find((each) => {
        if (name.toUpperCase() === each.name.toUpperCase()) {
            return each
        }
        })
        // why isn't .map working for this??? was I using it incorrectly? tried it with .map but 
        // I couldn't figure out how to make .map work for this task. 
   res.send(result ? [result] : [])
})

pokemonRouter.get("/:indexOfArray", (req, res) => {
    console.log("Get Pokemon ARRRRRRAY")
    const {indexOfArray} = req.params

    if (indexOfArray > pokemon.length) {
        res.send(`Sorry, no pokemon found at ${indexOfArray}`)
    }

    res.send(pokemon[indexOfArray])
})

 
module.exports = pokemonRouter