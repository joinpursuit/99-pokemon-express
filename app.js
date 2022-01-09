const express = require("express")
const app = express()
const pokemon = require("./models/pokemon.json")

// New Project Name Generator
app.get("/:verb/:adjective/:noun", (request, response) => {
    const { verb, adjective, noun } = request.params
    response.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}`)
})

// 99 Little Bugs In The Code
app.get("/", (request, response) => {
    response.send("Welcome 99 Pokemon")
})

app.get("/bugs", (request, response) => {
    response.send("99 little bugs in the code<br/>99 little bugs<br/><a href='/bugs/101'>pull one down,<br/>patch it around</a>")
})

app.get("/bugs/:numberOfBugs", (request, response) => {
    const { numberOfBugs } = request.params
    numberOfBugs >= 200 
    ? response.send("<a href='/'>Too many bugs!! Start over!</a>")
    :response.send(`${numberOfBugs} little bugs in the code<br/><a href="http://localhost:8888/bugs/${Number(numberOfBugs)+Number(2)}">Pull one down, patch it around</a>`)
})

// Poke-Express
console.log(pokemon[0])

module.exports = app