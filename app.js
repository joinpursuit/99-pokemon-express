const express = require("express");

const app = express();

const pokemon = require("./models/pokemon.json");

// Welcome message
app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

// New Project Name Generator
app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;

  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

// 99 Little bugs in the code
app.get("/bugs", (req, res) => {
  res.send(`
  <h1>99 little bugs in the code</h1>
  <a href="/bugs/101">pull one down, patch it around</a>
  `);
});

app.get(`/bugs/:numberOfBugs`, (req, res) => {
  let numberOfBugs = req.params.numberOfBugs;

  let bugNum = Number(numberOfBugs);

  if (bugNum < 200) {
    res.send(`
    <h1>${bugNum} little bugs in the code</h1>
    <a href="/bugs/${(bugNum += 2)}">Pull one down, patch it around</a>
    `);
  } else {
    res.send(`
    <h1>${bugNum} little bugs in the code</h1>
    <a href="/bugs">Too many bugs!! Start over!</a>
    `);
  }
});

// poke-express
app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

app.get("/pokemon/search", (req, res) => {
  let search = req.query.name;

  let foundPokemon = pokemon.find(
    (pokemon) => pokemon.name.toLowerCase() === search.toLowerCase()
  );

  if (foundPokemon) {
    res.send([foundPokemon]);
  } else {
    res.send([]);
  }
});

app.get("/pokemon/:indexOfArray", (req, res) => {
  let indexOfArray = req.params.indexOfArray;

  let pokemonIndex = Number(indexOfArray);

  if (pokemonIndex < pokemon.length) {
    res.send(pokemon[pokemonIndex]);
  } else {
    res.send(`Sorry, no pokemon found at ${indexOfArray}`);
  }
});

// Bonus
app.get("/pokemon-pretty", (req, res) => {
  res.send(`
  <ul>
  ${pokemon
    .map((poke) => {
      return `<li><a href="/pokemon-pretty/${pokemon.indexOf(poke)}">${
        poke.name
      }</a></li>`;
    })
    .join("<br />")}
  </ul>
  `);
});

app.get("/pokemon-pretty/:indexOfArray", (req, res) => {
  let indexOfArray = req.params.indexOfArray;

  let pokemonIndex = Number(indexOfArray);

  if (pokemonIndex < pokemon.length) {
    res.send(`
    <h1>${pokemon[pokemonIndex].name}</h1>
    <img src="${pokemon[pokemonIndex].img}" alt="${
      pokemon[pokemonIndex].name
    }" />
    <h2>Type: ${pokemon[pokemonIndex].type.join(", ")}</h2>
    <h3>Stats:</h3>
      <ul>
        <li>HP: ${pokemon[pokemonIndex].stats.hp}</li>
        <li>Attack: ${pokemon[pokemonIndex].stats.attack}</li>
        <li>Defense: ${pokemon[pokemonIndex].stats.defense}</li>
        <li>SPattack: ${pokemon[pokemonIndex].stats.spattack}</li>
        <li>SPdefense: ${pokemon[pokemonIndex].stats.spdefense}</li>
        <li>Speed: ${pokemon[pokemonIndex].stats.speed}</li>
      </ul>
    `);
  } else {
    res.send(`Sorry, no pokemon found at ${indexOfArray}`);
  }
});

module.exports = app;
