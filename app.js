const express = require("express");
console.log(express)

const pokemon = require("./models/pokemon.js")


const app = express();

app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon");
});

app.get("/pokemon", (req, res) => {
    res.send(pokemon);
})

module.exports = app;