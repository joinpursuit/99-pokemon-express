const express = require("express");
const pokemon = require("./models/pokemon.js")


const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to Pokemon Express!")
});

app.get("/pokemon", (req, res) => {
    res.send(pokemon);
})

module.exports = app;