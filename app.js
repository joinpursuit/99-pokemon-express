const { response } = require("express");
const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json");

//intro page
app.get("/", (request, response) => { 
response.send("Welcome 99 Pokemon");
})

//99 little bugs in the code
app.get("/bugs", (request, response) => {
response.send(`<h1>99 little bugs in the code <h1> <br> <a href="/bugs/101">pull one down, patch it around</a>`);
});

app.get("/bugs/:numberOfBugs", (request, response) => {
const { numberOfBugs } = request.params;
    if (numberOfBugs < 200) { //if less than 200 bugs, pull one down
    response.send(`${numberOfBugs} little bugs in the code <br> 
    <a href="/bugs/${Number(numberOfBugs) + 2} ">Pull one down, patch it around</a>`
    );} 
    else {
    response.send(`Too many bugs!! Start over! <br> <a href="/bugs">Start Over</a>`);
    }
});

//Congratulations on starting a new project called jumping-joyous-jellybean!
app.get("/:verb/:adjective/:noun", (request, response) => {
const { verb, adjective, noun } = request.params;
response.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})

// make a route `/pokemon` that will show a list of all the pokemon
app.get("/pokemon", (request, response) => {
response.json(pokemon)    
})

// make a route `/pokemon/:indexOfArray` that returns 1 pokemon at that array position
app.get("/pokemon/:indexOfArray", (request, response) => {
const { indexOfArray } = request.params; //user input?
if (pokemon[indexOfArray]) {
response.json(pokemon[indexOfArray]); //return pokemon at that position
} 
else {
response.send(`Sorry, no pokemon found at ${[indexOfArray]}`);
    } //no pokemon at that position
});

// make a route /pokemon/search - where a user can add a query parameter
app.get("/pokemon/search", (request, response) => {
    const { poke } = request.query;
    const pokemonArr = pokemon.filter((pikachu) => {
    return poke.toLowerCase() === pikachu.name.toLowerCase(); //not case sensitive
});
    if (pokemonArr.length > 0) {
    response.json(pokemonArr);
    } 
    else {
    response.send("[]"); //show empty arr if pokemon isnt found
    }
});


module.exports = app;