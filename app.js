const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json");
// console.log(pokemon[0].name);

require("dotenv").config();

app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon")
})

app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb, adjective, noun } = req.params;
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
});

app.get("/bugs", (req, res) => {
    res.send(`
        99 little bugs in the code
        <br>
        99 little bugs
        <br>
        <a href="/bugs/101">
        pull one down, 
        <br />
        patch it around
        </a> 
    `);
});

app.get("/bugs/:numberOfBugs", (req, res) => {
    let { numberOfBugs } = req.params;
    let { num2 } = req.query;
    num2 = 2
    const plus2 = Number(numberOfBugs) + num2
    if(numberOfBugs >= 200){
        res.send(`<a href="/bugs">Too many bugs!! Start over!</a>`);
    }
    res.send(`
        ${numberOfBugs} little bugs in the code
        ${numberOfBugs} little bugs
        <a href="/bugs/${plus2}">Pull one down, patch it around</a>
    `);
});

app.get("/pokemon", (req, res) => {
    res.send(pokemon);
});

app.get("/pokemon/search", (req, res) => {
    const { name } = req.query;
    const whoseThatPokemon = pokemon.find((pokemon) => {
        return pokemon.name.toLowerCase() === name.toLowerCase();
    })
    if(whoseThatPokemon){
        res.send([whoseThatPokemon]);
        return;
    }else{
        res.send([]);
    }
});

app.get("/pokemon/:indexOfArray", (req, res) => {
    const { indexOfArray } = req.params;
    if(pokemon[indexOfArray]){
        res.send(pokemon[indexOfArray]);
        return;
    }else{
        res.send(`Sorry, no pokemon found at ${indexOfArray}`);
    }
});

module.exports = app;