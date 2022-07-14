const express = require("express");
const pokemon = require("./models/pokemon.json");
const app = express();

app.get("/", (req, res) => {
    res.send('Welcome 99 Pokemon')
})

// New Project Name Generator:

app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb, adjective, noun } = req.params;
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})

// 99 Little Bugs in the Code: 

app.get("/bugs", (req, res) => {
    res.send('<h1> 99 little bugs in the code </h1>')
})

// --------------- Doesn't Work ----------------
app.get("/bugs/:numberOfBugs", (req, res) => {
    const { numberOfBugs } = req.params;
    if (Number(numberOfBugs) < 200) {
        const num = Number(numberOfBugs) + 2
        res.send(`<a href='${num}'>Pull one down, patch it around</a>`)
    } else {
        res.send("Too many bugs!! Start over!")
    }
})

// Pokemon 
app.get("/pokemon", (req, res) => {
    res.send(pokemon)
})

app.get("/pokemon/search", (req, res) => {
    const name = req.query.name;
    pokemon.map(el => {
        if (el.name.toLowerCase() === name.toLowerCase()) {
            res.send([el])
        }
    })
    res.send([])
})

app.get("/pokemon/:indexOfArray", (req, res) => {
    const index = req.params.indexOfArray
    if (pokemon[index]){
        res.send(pokemon[index])
    } else {
        res.send(`Sorry, no pokemon found at ${index}`)
    }
})


module.exports = app;