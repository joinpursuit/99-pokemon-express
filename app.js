const express = require('express');

const app = express();

const pokemon = require('./models/pokemon.json');
console.log(pokemon[0]);



const PORT = 8888;

app.get('/', (req, res) => {
    res.send("Hello express")
});

app.get('/laughing/lively/liquors', (req, res) => {
    res.send("Congratulations on starting a new project called laughing-lively-liquors!")
});


app.get('/bugs/:numberOfBugs', (req, res) => {
    let { numberOfBugs } = req.params;
    if (numberOfBugs < 200) {
        let MoreBugs = Number (numberOfBugs) + 2;

        res.send(`${numberOfBugs} little bugs in the code
        <a herf="http://localhost:8888/bugs/${MoreBugs}">Pull on down, patch it around</a>
        `);
    } else {
        res.send(`<aherf="http://localhost:8888/bugs/">Too many bugs ! Start over !</a>`);
    }
});


app.get('/pokemon', (req, res) => {
    res.json(pokemon);
})

app.get(`/poke/search`, (req, res) => {
    const { name } = req.query;
    const pokeName = pokemon.find((poke) => {
        return poke.name.toUpperCase() === name.toUppperCase();
    })
    if (pokeName) {
        res.json([pokeName]);
    } else {
        res.json([]);
    }
})

app.get('/pokemon/:indexOfArray', (req, res) => {
    let { indexofArray } = req.params;

    if (poke[indexofArray]) {
        res.send(pokemon[`${indexOfArray}`]);
    } else {
        res.send(`Sorry, no pokemonfound at ${indexOfArray}`)
    }
})

module.exports= app;