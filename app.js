const express = require("express");
console.log(express)

const pokemon = require("./models/pokemon.js")
console.log(pokemon[1]);


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

app.get("/pokemon/search", (req, res) => {
    res.send(
        pokemon.filter((pokeObj) => {
            return pokeObj.name.toLowerCase() === this.request.query.name.toLowerCase()
        })
    );
});

module.exports = app;