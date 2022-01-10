const express = require("express");
console.log(express)

const pokemon = require("./models/pokemon.js")


const app = express();

app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon");
});

app.get("/bugs", (req, res) => {
    res.send(
        `<h1>
        99 little bugs in the code
        </h1>
        <a href = '/bugs/101'> Pull one down, patch it around
        </a>`
        )
});

app.get("/pokemon", (req, res) => {
    res.send(pokemon);
})

module.exports = app;