const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json")


app.get("/", (request, response) => {
    console.log("GET request received for / route");
    response.send("Welcome 99 Pokemon");
});

app.get("/bugs", (request, response) => {
    console.log("GET request received for /bugs route");
    response.send("<h1>99 little bugs in the code<h1/>" + `<a href='http://localhost:8888/bugs/101'>Pull one down, patch it around</a>`);
});

app.get("/bugs/:numOfBugs", (request, response) => {
    let { numOfBugs } = request.params;
    console.log(`GET request received for /bugs/${numOfBugs} route`);
    if (numOfBugs < 200) {
        let plusTwo = Number(numOfBugs) + 2;
        response.send(`${numOfBugs} little bugs in the code <a href="http://localhost:8888/bugs/${plusTwo}">Pull one down, patch it around</a>`);
    } else {
        response.send(`<a href="http://localhost:8888/bugs/">Too many bugs!! Start over!</a>`);
    }
});

app.get("/pokemon", (request, response) => {
    console.log("GET request received for /pokemon route");
    response.json(pokemon);
});

app.get("/pokemon/search", (request, response) => {
    const { name } = request.query;
    const pokemonName = pokemon.find((poke) => {
        return poke.name.toLowerCase() === name.toLowerCase()
    });
    if (pokemonName) {
        response.json([pokemonName]);
    } else {
        response.json([]);
    }
});

// app.get("/pokemon/search", (request, response) => {
//     const { name } = request.query;
//     const pokemonName = pokemon.find(
//     (poke) => poke.name.toLowerCase() === name.toLowerCase()
//     );
//     response.send(pokemonName ? [pokemonName] : []);
// });

app.get("/pokemon/:index", (request, response) => {
    let { index } = request.params;
    console.log(`GET request received for /pokemon/${index} route`);
    if (!pokemon[request.params.index]) {
        response.send(`Sorry, no pokemon found at ${request.params.index}`)
    } else { 
        response.send(pokemon[request.params.index]);
    }
});

app.get("/:verb/:adjective/:noun", (request, response) => {
    let { verb, adjective, noun } = request.params;
    console.log(`GET request received for /${verb}-${adjective}-${noun} route`);
    response.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`);
});

module.exports = app; 