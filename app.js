// DEPENDENCIES
const express = require("express");
const pokemon = require("./models/pokemon.json");

//CONFIGURATION
const app = express();

// ROUTES
app.get("/:verb/:adjective/:noun", (req,res)=> {
    let {verb, adjective, noun} = req.params;
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`);
})

app.get("/", (req, res)=> {
    res.send("Welcome 99 Pokemon");
})

app.get("/bugs", (req, res) => {
    res.send("<h1>99 little bugs in the code</h1><a href='/bugs/101'>pull one down, patch it around</a>");
})

app.get("/bugs/:numberOfBugs", (req, res)=> {
    let {numberOfBugs} = req.params;
    if(numberOfBugs >= 200) {
        res.send("Too many bugs!! Start over!")
    } else {
        res.send(`<p>${numberOfBugs} little bugs in the code</p>
                  <a href="/bugs/${Number(numberOfBugs) + 2}">Pull one down, patch it around</a>`);
    }
})

console.log(pokemon[0]);

app.get("/pokemon", (req, res)=> {
    res.send(pokemon);
})

app.get("/pokemon/search", (req, res)=> {
    const {name} = req.query;
    const foundPoke = pokemon.filter(pokeEl => pokeEl.name.toLowerCase() === name.toLowerCase());
    if(foundPoke.length > 0) res.send(foundPoke);
    else res.send([]);
})

app.get("/pokemon/:indexOfArray", (req, res)=> {
    let {indexOfArray} = req.params;
    if(pokemon[indexOfArray]) res.send(pokemon[indexOfArray]);
    else res.send(`Sorry, no pokemon found at ${indexOfArray}`);
})

// EXPORT
module.exports = app;