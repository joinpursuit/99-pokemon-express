// Dependencies
const express = require('express');

// Configuration
const app = express();

const pokemon = require("./models/pokemon.json");
// console.log(pokemon[0]);

// Routes
app.get("/", (req, res)=>{
    res.send("Welcome 99 Pokemon");
});

// *** code for New Project Name Generator ***
app.get("/:verb/:adjective/:noun", (req, res)=>{
    let { verb, adjective, noun } = req.params;
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`);
});

// *** code for 99 Little Bugs In the Code ***
app.get("/bugs", (req, res)=>{
    res.send(`99 little bugs in the code
    <a href="http://localhost:8888/bugs/101">pull one down, patch it around</a>
    `);
})

app.get("/bugs/:numberOfBugs", (req, res)=>{
    let { numberOfBugs } = req.params;
    if (numberOfBugs < 200) {
        let twoMoreBugs = Number(numberOfBugs) + 2;

        res.send(`${numberOfBugs} little bugs in the code
        <a href="http://localhost:8888/bugs/${twoMoreBugs}">Pull one down, patch it around</a>
        `);
    } else {
        res.send(`<a href="http://localhost:8888/bugs/">Too many bugs!! Start over!</a>`);
    }
})

// *** code for Poke-Express ***
app.get("/pokemon", (req, res)=>{
    res.json(pokemon);
})

app.get("/pokemon/:indexOfArray", (req, res)=>{
    let { indexOfArray } = req.params;

    if (pokemon[indexOfArray]) {
        res.send(pokemon[`${indexOfArray}`]);
    } else {
        res.send(`Sorry, no pokemon found at ${indexOfArray}`)
    }
})





// Export
module.exports = app;