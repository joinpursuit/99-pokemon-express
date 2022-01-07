//DEPENDENCIES 
const e = require("express");
const express = require("express");
const pokemon = require("./models/pokemon.json");
// console.log(pokemon[0]);

//CONFIGURATION
const app = express();

//ROUTES & CALLBACK

// New Project Name Generator
app.get("/:verb/:adjective/:noun", (request, response) => {
    console.log("GET request received to route: /:verb/:adjective/:noun")
    const { verb, adjective, noun } = request.params
    response.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}`)
})

//99 Little Bugs In the Code
const bugs = 99
app.get("/", (request, response) => {
    console.log("GET request received to route: /")
    response.send(`Welcome ${bugs} Pokemon`)
})

app.get("/bugs", (request, response) => {
    console.log("GET request received to route: /bugs")
    response.send(`
        <p>${bugs} little bugs in the code</p>
        <a href="/bugs/${bugs+2}">pull one down, patch it around</a>
    `)
})

app.get("/bugs/:numberOfBugs", (request, response) => {
    console.log("GET request received to route: /bugs/:numberOfBugs")
    const { numberOfBugs } = request.params
    const sum = Number(numberOfBugs)+2
    if (numberOfBugs < 200) {
        response.send(`
        <p>${numberOfBugs} little bugs in the code</p>
        <a href="/bugs/${sum}">Pull one down, patch it around</a>
        `)
    } else {
        response.send(`
        <a href="/bugs">Too many bugs!! Start over!</a>
        `)
    }
})

//Poke-Express
app.get("/pokemon", (request, response) => {
    console.log("GET request received to route: /pokemon")
    response.send(pokemon)
})

app.get("/pokemon/search", (request, response) => {
    console.log("GET request received to route: /pokemon/search")
    console.log(request.query)
    const { name } = request.query
    response.send(pokemon.filter((pokemon) => pokemon.name.toLowerCase() === name.toLowerCase()))
})

app.get("/pokemon/:indexOfArray", (request, response) => {
    console.log("GET request received to route: /pokemon/:indexOfArray")
    const { indexOfArray } = request.params
    if (pokemon[indexOfArray]) {
        response.send(pokemon[indexOfArray])
    } else {
        response.send(`Sorry, no pokemon found at ${[indexOfArray]}`)
    }
})



module.exports = app;