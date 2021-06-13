//DEPENDENCIES
const express = require("express");
const pokemon = require("./models/pokemon.json");


//CONFIGURATION
const app = express();


//ROUTES

//Route 1
app.get("/", (req, res) => {
    res.send(`Welcome 99 Pokemon`)
})

//Route 2
app.get("/:verb/:adjective/:noun", (req, res) => {
    const {verb, adjective, noun} = req.params;
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}`)
})

//Route 3
app.get("/bugs", (req, res) => {
    res.send(`<h2 style="text-align:center;">99 little bugs in the code <br> <a href="/bugs/101">pull one down, patch it around</a></h2>`)
})

//Route 4
app.get("/bugs/:numberOfBugs", (req, res) => {
    const {numberOfBugs} = req.params;
    if(numberOfBugs < 200){
        res.send(`${numberOfBugs} little bugs in the code <br> <a href="/bugs/${Number(numberOfBugs)+2}">Pull one down, patch it around</a>`)
    }else{
        res.send(`<a href="/bugs">Too many bugs!! Start over!</a>`)
    }
})

//Route 5
app.get("/pokemon", (req, res) => {
    res.send(pokemon)
})

//Route 6
app.get("/pokemon/search", (req, res) => {
    const {name} = req.query;
    const myPokemon = pokemon.filter(poke => { return (poke.name === name || name.toLowerCase() === poke.name.toLowerCase()) })
    if(myPokemon){
        res.send(myPokemon)
    }else{
        res.send([])
    }
})

//Route 7
app.get("/pokemon/:indexOfArray", (req, res) => {
    const {indexOfArray} = req.params;
    if(pokemon[indexOfArray]){
        res.send(pokemon[indexOfArray]);
    }else{
        res.send(`Sorry, no pokemon found at ${indexOfArray}`)
    }
});

//EXPORT
module.exports = app;