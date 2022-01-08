const express = require('express');
const app = express();

//ROOT
    app.get("/", (req, res) => {
        res.send("Welcome 99 Pokemon")
    });

// BUGS
    app.get("/bugs", (req, res) => {
        res.send(`<h1>99 little bugs in the code</h1>
                <a href='/bugs/101'>Pull one down, patch it around</a>
        `)
    });

    app.get("/bugs/:numberOfBugs", (req, res) => {
        const { numberOfBugs } = req.params;
        if (numberOfBugs >= 200) {
            res.send(`<a href= "/bugs">Too many bugs!! Start over!`)
        }
            res.send(`
                <h1>${numberOfBugs} little bugs in the code </h1>
                <a href="/bugs/${Number(numberOfBugs) + 2}">Pull one down, patch it around</a>
        `)
    });


//POKEMON
const pokemon = require("./models/pokemon.json");

    app.get("/pokemon", (req, res) => {
        res.json(pokemon)
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

    app.get("/pokemon/:index", (req, res) => {
        const { index } = req.params;
        if(pokemon[index]){
            res.send(pokemon[index]);
        } else {
            res.send(`Sorry, no pokemon found at ${index}`);
        }
    });

    //VERB, NOUNS, ADJECTIVES
    app.get("/:verb/:adjective/:noun", (req, res) => {
        let { verb, adjective, noun } = req.params;
        res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`);
    });

module.exports = app;