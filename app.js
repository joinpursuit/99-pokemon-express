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

module.exports = app;