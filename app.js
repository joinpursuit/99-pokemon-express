const express = require("express");
const res = require("express/lib/response");
const pokemon = require("./models/pokemon.json");

// console.log(pokemon[0])

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon");
})

app.get("/:verb/:adjective/:noun", (req, res)=> {
    const {verb, adjective, noun} = req.params;
    res.send("Congratulations on starting a new project called " + verb + "-" + adjective + "-" + noun)
})

app.get("/bugs", (req, res)=> {
    res.send(`<h1>99 little bugs in the code.</h1>
    <a href="http://localhost:8888/bugs/101">pull one down, patch it around</a>`
    );
})

app.get("/bugs/:numberOfBugs",(req, res)=> {
    const { numberOfBugs } = req.params;
    let num = Number(numberOfBugs) + 2
    if( numberOfBugs >= 200 ) {
        res.send(`<a href="http://localhost:8888/bugs">Too many bugs!! Start over!</a>`)
    } else {
        res.send(`${numberOfBugs} little bugs in the code
        <a href="http://localhost:8888/bugs/${num}">Pull one down, patch it around</a>`
        );
    }
})

app.get("/pokemon",(req, res) => {
    res.send(pokemon);
})

app.get("/pokemon/search", (req, res) => {
    const { name } = req.query;
    for (let pokemonObj of pokemon) {
        if(name.toLowerCase() === pokemonObj.name.toLowerCase()) {
            res.send([pokemonObj]);
        } else {
            res.send([])
        }
    }
})

app.get("/pokemon/:indexOfArray",(req, res) => {
    const { indexOfArray } = req.params;
    if(pokemon[indexOfArray]) {
        res.send(pokemon[indexOfArray]);
    } else {
        res.send(`Sorry, no pokemon found at ${indexOfArray}`)
    }
})



module.exports = app;