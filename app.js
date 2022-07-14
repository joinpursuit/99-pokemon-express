const express = require("express");
const pokemon = require("../99-pokemon-express/models/pokemon.json");

const app = express();

app.get("/", (req, res) => {
    res.send(`Welcome 99 Pokemon`)
})

app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb, adjective, noun } = req.params

    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})

app.get("/bugs", (req, res) => {
    res.send(
    `<h1>99 little bugs in the code</h1>
     <a href="/bugs/101">pull one down, patch it around</a>`
    )
})

app.get("/bugs/:numberOfBugs", (req, res) => {
    const { numberOfBugs } = req.params
    if(Number(numberOfBugs) < 200){
        res.send(
            `${numberOfBugs} little bugs in the code
            <a href="/bugs/${Number(numberOfBugs) + 2}">Pull one down, patch it around</a>`
        )
    } else {
      res.send(`Too many bugs!! Start over! <a href="/bugs">home</a>`)  
    }
})

app.get("/pokemon", (req, res) => {
    res.send(pokemon)
})

app.get("/pokemon/search/", (req, res) => {
    const { name } = req.query
    const foundPokemon = pokemon.find((poke)=> poke.name.toLowerCase() === name.toLowerCase())

        if(foundPokemon){
            res.send([foundPokemon])
        } else {
            res.send([])
        }
})

app.get("/pokemon/:indexOfArray", (req, res) => {
    const { indexOfArray } = req.params
    if(pokemon[Number(indexOfArray)]){
        res.send(pokemon[Number(indexOfArray)])
    } else {
        res.send(`Sorry, no pokemon found at ${Number(indexOfArray)}`)
    }
})



module.exports = app