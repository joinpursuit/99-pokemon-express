const express = require("express");


const pokemon = require("./models/pokemon.js")
console.log(pokemon[1]);


const app = express();

app.get("/:verb/:noun/:adjective", (req, response) => {
    const { verb, noun, adjective } = req.params;
    response.send(
        `Congratulations on starting a new project called ${verb}-${noun}-${adjective}`
    );
});

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

app.get("/pokemon/:indexOfArray", (req, res) => { //request parameter 
    const { pokeIndex } = req.params; // Object to request pokemon at index
    if (!pokemon[pokeIndex]) {
        res.send(`Sorry, no pokemon found at ${pokeIndex}`);
    } else {
        res.send(pokemon[pokeIndex]);
    }
});

app.get("/pokemon/search", (req, res) => {
    res.send(
        pokemon.filter((pokeObj) => {
            return pokeObj.name.toLowerCase() === request.query.name.toLowerCase();
        })
    );
});

module.exports = app;