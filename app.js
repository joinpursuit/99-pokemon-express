const express = require("express");
const app = express()

app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb, adjective, noun } = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}`)
})

app.get("/bugs", (req, res) => {
    res.send(`<h1>99 little bugs in the code</h1>
        99 little bugs
        <br>
        <a href=/bugs/101>pull one down, patch it around</a>`)
})

app.get("/bugs/:numberOfBugs", (req, res) => {
    const { numberOfBugs } = req.params
    if (numberOfBugs < 200) {
        res.send(`${numberOfBugs} little bugs in the code
        <br>
    <a href=/bugs/${Number(numberOfBugs) + 2}>Pull one down, patch it around</a>`)
    } else {
        res.send(` Too many bugs!! Start over! <a href=/bugs/>Start over</a>`)
    }
})

app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon")
})

const pokemon = require("./models/pokemon.json");
// console.log(pokemon[0])

app.get("/pokemon", (req, res) => {
    res.json(pokemon)
})

app.get("/pokemon/search", (req, res) => {
    const { name } = req.query
    const poke = pokemon.find(elem => elem.name.toLowerCase() === name.toLowerCase())
    if (!poke) {
        res.send([])
    } else {
        res.send([poke])
    }
})

app.get("/pokemon/:indexOfArray", (req, res) => {
    // console.log(req.params)
    const { indexOfArray } = req.params
    if (pokemon[indexOfArray]) {
        res.send(pokemon[indexOfArray])
    } else {
        res.send(`Sorry, no pokemon found at ${indexOfArray}`)
    }
})


module.exports = app

