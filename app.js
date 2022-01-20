// DEPENDENCIES
const express = require("express");
const pokemon = require("./models/pokemon.json")

require("dotenv").config();

// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (req, res) => {
    console.log("GET to /")
    res.send("Welcome 99 Pokemon");
})

//EXPRESS WILDCARD VARIABLES
app.get("/:verb/:adjective/:noun", (req, res) => {
    // const { verb, adjective, noun } = req.params;
    res.send(`Congratulations on starting a new project called ${req.params.verb}-${req.params.adjective}-${req.params.noun}!`);
})


// 99 BUGGIES CODE

app.get("/bugs", (req, res) => {
    res.send(
    `<h1>99 little bugs in the code</h1>
    <a href= "/bugs/101"> Pull one down, patch it around</a>`
    );
})

app.get("/bugs/:numberOfBugs", (req, res) => {
    const { numberOfBugs } = req.params;
    const coolBug = Number(numberOfBugs);
    
    res.send(
    `<p> ${coolBug} little bugs in the code </p>
     <a href= "${coolBug < 200 ? coolBug + 2 : "./"}" >${coolBug < 200 
     ? "Pull one down, patch it around"
     : "Too many bugs!! Start over!"}</a>`
    );
});



// POKEMON, GOTTA CATCH EM' ALL
app.get("/pokemon", (req, res) => {
    res.send(pokemon);
})

app.get("/pokemon/search", (req, res) => {
    const { name } = req.query;
    const selectPoke = pokemon.find((pokemon) => pokemon.name.toLowerCase() === name.toLowerCase());

    res.send(selectPoke ? [selectPoke] : []);
})

app.get("/pokemon/:index", (req, res) => {
    const { index } = req.params;
    res.send(pokemon[Number(index)] || "Sorry, no pokemon found at " + index );
})


module.exports = app;