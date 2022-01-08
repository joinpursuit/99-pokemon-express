const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json");

app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon");
});

app.get("/pokemon", (req, res) => {
    res.send(pokemon);
});

app.get("/pokemon/search", (req, res) => {
    const { name } = req.query;
    const { params } = req.params;

    let searchedPokemon = pokemon.find(pokemonEl => {
        return pokemonEl.name.toLowerCase() === name.toLowerCase();
    });

    if(!searchedPokemon){
        res.send([]);
    } else {
        res.send([searchedPokemon]);
    }
});

app.get("/pokemon/:indexOfArray", (req, res) => {
    const { indexOfArray } = req.params;
    if(pokemon[indexOfArray]){
        res.send(pokemon[indexOfArray]);
    } else {
        res.send(`Sorry, no pokemon found at ${indexOfArray}`);
    }
});


app.get("/:verb/:adjective/:noun", (req, res) => {
    let { verb, adjective, noun } = req.params;
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`);
});

app.get("/bugs", (req, res) => {
    res.send(`
        <h1>99 little bugs in the code</h1>
        <a href='/bugs/101'>Pull one down, patch it around</a>
    `);
});

app.get("/bugs/:numberOfBugs", (req, res) => {
    const { numberOfBugs } = req.params;
    if ( numberOfBugs >= 200){
        res.send(`
            <a href='/bugs'>Too many bugs!! Start over!</a>
        `)
    }
    res.send(`
        <h1>${numberOfBugs} little bugs in the code</h1>
        <a href='/bugs/${Number(numberOfBugs) + 2}'>Pull one down, patch it around</a>
    `)
});

module.exports = app;