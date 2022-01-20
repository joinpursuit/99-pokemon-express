// DEPENDENCIES
const express = require("express");
const pokemon = require("./models/pokemon.json")

require("dotenv").config();

// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (require, response) => {
    response.send("Welcome 99 Pokemon");
})

//EXPRESS WILDCARD VARIABLES
app.get("/:verb/:adjective/:noun", (require, response) => {
    response.send(`Congratulations on starting a new project called ${require.params.verb}-${require.params.adjective}-${require.params.noun}!`);
})


// 99 BUGGIES CODE
app.get("/bugs", (require, response) => {
    console.log("GET request recieved to route: /bugs");
    
    response.send(
    `<h1>"99 little bugs in the code"</h1>
    <a href= "/bugs/101"> Pull one down, patch it around </a>`)
})

app.get("/bugs/:numberOfBugs", (request, response) => {
    const { numberOfBugs } = request.params;
    const coolBug = Number(numberOfBugs);
    
    response.send(
    `<p> ${coolBug} little bugs in the code </p>`
    `<a href= "${coolBug < 200 ? coolBug + 2 : "./"}" >
    ${coolBug < 200 ? "Pull one down, patch it around"
    : "Too many bugs!! Start over!"}
    </a>` );
})

// POKEMON, GOTTA CATCH EM' ALL
app.get("/pokemon/search", (request, response) => {
    const { name } = response.query;
    const selectPoke = pokemon.find((pokemon) => pokemon.name.toLowerCase()
    === name.toLowerCase());

    response.send(selectPoke ? [selectPoke] : []);
})



app.get("/pokemon/:index", (request, response) => {
    const { index } = request.params;
    response.send(pokemon[Number(index)] || "No pokemon found at " + index );
})



module.exports = app;