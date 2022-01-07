const express = require('express')
const app = express();
const pokemon = require('./models/pokemon.json');




//Verbs,adjectives,nouns
app.get("/", (request, response) => {
    console.log('GET to /')
    response.send(`Welcome 99 Pokemon`)
})


app.get("/:verb/:adjective/:noun", (request, response) => {
    const { verb, adjective, noun } = request.params;
    response.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})




//Too Many Bugs
app.get("/bugs", (request, response) => {
    response.send(

    `<h1>99 little bugs in the code</h1>
    <a href="/bugs/101">pull one down, patch it around</a>`

    );
});


app.get("/bugs/:numberOfBugs", (request, response) => {
    const { numberOfBugs } = request.params;
    const num = Number(numberOfBugs);
    response.send(

    `<p>${num} little bugs in the code</p>
    <a href="${num < 200 ? num + 2 : "./"}">${num < 200
    ? "Pull one down, patch it around"
    : "Too many bugs!! Start over!"
    }</a>`
    
    );
});




//Pokemon Search
app.get("/pokemon", (request, response) => {
    response.send(pokemon);
});


app.get("/pokemon/search", (request, response) => {
    const { name } = request.query;
    const pokeName = pokemon.find(
    (pokemon) => pokemon.name.toLowerCase() === name.toLowerCase()
    );
    response.send(pokeName ? [pokeName] : []);
});


app.get("/pokemon/:index", (request, response) => {
    const { index } = request.params;
    response.send(
    pokemon[Number(index)] || "Sorry, no pokemon found at " + index
    );
});



module.exports = app;