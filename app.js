const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json");

app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon");
})

app.get("/bugs", (req, res) => {
    res.send(`99 little bugs in the code<br>
    99 little bugs<br>
    <a href="/bugs/101">
        Pull one down<br>
        patch it around<br>
    </a>
    101 bugs in the code`);
})

app.get("/bugs/:numberOfBugs", (req, res) => {
    const { numberOfBugs } = req.params
    if (numberOfBugs < 200) {
        res.send(`${numberOfBugs} little bugs in the code<br>
        ${numberOfBugs} little bugs<br>
        <a href="/bugs/${Number(numberOfBugs) + 2}">Pull one down, patch it around</a><br>
        ${Number(numberOfBugs) + 2} bugs in the code`);
    } else {
        res.send(`<a href="/bugs">Too many bugs!! Start over!</a>`);
    }
})

app.get("/pokemon", (req, res) => {
    res.send(pokemon);
})

app.get("/pokemon/search", (req, res) => {
    const { name } = req.query;
    const searchName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    const found = pokemon.find(pok => pok.name === searchName);
    res.send(found ? [found] : []);
})

app.get("/pokemon/:indexOfArray", (req, res) => {
    const { indexOfArray } = req.params;
    res.send(pokemon[indexOfArray] ? pokemon[indexOfArray] : `Sorry, no pokemon found at ${indexOfArray}`);
})

app.get("/pokemon-pretty", (req, res) => {
    const pokemonHtmlList = pokemon.map((pok, i) => `<li><a href="/pokemon-pretty/${i}">${pok.name}</a></li>`).join("");
    res.send(`<ul>${pokemonHtmlList}</ul>`);
})

app.get("/pokemon-pretty/:indexOfArray", (req, res) => {
    const { indexOfArray } = req.params
    const pok = pokemon[indexOfArray]
    if (!pok) return res.send(`No pokemon found at index ${indexOfArray}`);
    res.send(`
        <h1>${pok.name}</h1>
        <img src="${pok.img}" />
        <h2>Type: ${pok.type.join(", ")}</h2>
        <h2>Stats:</h2>
        <ul>
            <li>HP: ${pok.stats.hp}</li>
            <li>Attack: ${pok.stats.attack}</li>
            <li>Defense: ${pok.stats.defense}</li>
            <li>Sp Attack: ${pok.stats.spattack}</li>
            <li>Sp Defense: ${pok.stats.spdefense}</li>
            <li>Speed: ${pok.stats.speed}</li>
        </ul>
    `)
})

app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb, adjective, noun } = req.params;
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}`);
})

module.exports = app;