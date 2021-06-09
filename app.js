const express = require("express")
const app = express()
const pokemon = require("./models/pokemon.json")
console.log(pokemon[0])
module.exports = app


app.get("/", (req, res) => {
    res.send('Welcome 99 Pokemon')
})

// Exercise 1
app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb, adjective, noun } = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}`)
})

// Exercise 
app.get("/bugs", (req, res) => {
    res.send(`
    <p>99 little bugs in the code</p>
    <a href="/bugs/101">pull one down, patch it around</a>
    `)
})
app.get("/bugs/:numberOfBugs", (req, res) => {
    const { numberOfBugs } = req.params
    console.log(`req.params: ${numberOfBugs}`)
    const bugSum = Number(numberOfBugs) + 2
    if (numberOfBugs >= 200) {
        res.send(`
        <a href="/bugs">Too many bugs!! Start over!</a>
        `)
    } else {
        res.send(`
        <p>${numberOfBugs} little bugs in the code</p>
        <a href=${bugSum}>Pull one down, patch it around</a>
        `)
    }
})

// Exercise 3
app.get("/pokemon", (req, res) => {
    // const pokeArr = pokemon.map(eachPokemon => {
    //     return eachPokemon.name
    // })
    res.send(pokemon)
})
app.get("/pokemon/search", (req, res) => {
    const { name } = req.query
    const newPokemon = pokemon.find(item => {
        return item.name.toLowerCase() === name.toLowerCase()
    })
    console.log(newPokemon)
    console.log(name)
    if (newPokemon) {
        res.send([newPokemon])
    } else {
        res.send([])
    }
    // WHY DOESN'T THIS WORK?  res.send(`${newPokemon}`)
})
app.get("/pokemon/:indexOfArray", (req, res) => {
    const { indexOfArray } = req.params
    if (pokemon[indexOfArray]) {
        res.send(pokemon[indexOfArray])
    } else {
        res.send(`Sorry, no pokemon found at ${indexOfArray}`)
    }
})


