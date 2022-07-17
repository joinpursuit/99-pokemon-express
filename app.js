const express = require("express");

const app = express();
// console.log(pokemon[o]);

app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon")
})

app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb, adjective, noun } = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})

app.get("/bugs", (req, res) => {
    res.send(
        `
        <p>99 little bugs in the code</p>
        <a> href="http://localhost:8888/bugs/101">pull one down, patch it around</a>
        `)
    
})

app.get("/bugs/:numberOfBugs", (req, res) => {
    const { numberOfBugs } = req.params
    addedBugs = Number(numberOfBugs) + 2
    if (numberOfBugs < 200) {
        res.send(`
        <p>${numberOfBugs} little bugs in the code</p>
        <a href="http://localhost:8888/bugs/${addedBugs}">Pull one down, patch it around</a> 
        `)
    } else {
        res.send(`<a href="http://localhost:888/bugs">Too many bugs!! Start over!</a>`)
    }
})

app.get("/pokemon/", (req, res) => {
    res.send(pokemon)
})

app.get("/poke/search/", (req, res) => {
    
    const { name } = req.query 
    const findPokemon = pokemon.find((poke) => {
        return poke.name.toLowerCase() === name.toLowerCase()
    })

    if (findPokemon) {
        res.send([findPokemon])
    } else {
        res.send([])
    }
})

app.get('/pokemon/:indexOfArray/', (req, res) => {
    const { indexOfArray } = req.params
    if (!pokemon[indexOfArray]) {
        res.send(`Sorry, no pokemon found at ${indexOfArray}`)
    } else {
        res.send(pokemon[indexOfArray])
    }
})


// app.get("/jumping/joyous/jellybean",(req,res) => {
//     res.send("Jelly Bean")
// }
    
module.exports = app;