const express = require("express");
const pokemon = require("./pokemon.json");

const app = express();

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
            <a href="/bugs/${Number(numberOfBugs) + 2}">pull one down, patch it around</a>`
        )
    } else {
      res.send(`Too many bugs!! Start over! <a href="/bugs">home</a>`)  
    }
})

app.get("/pokemon", (req, res) => {
    res.send(pokemon)
})

module.exports = app