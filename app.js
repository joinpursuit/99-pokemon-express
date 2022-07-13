// DEPENDENCIES
const express = require('express');
const pokemon = require('./models/pokemon.json');

// CONFIGURATION
const app = express();

//99 LITTLE BUGS IN THE CODE
app.get('/bugs', (req, res) => {
  res.send(`
  <h1>99 little bugs in the code</h1>
  <a href='/bugs/101'>pull one down, patch it around</a>
  `);
});

app.get('/bugs/:numberOfBugs', (req, res) => {
  let { numberOfBugs } = req.params;
  let bugNum = Number(numberOfBugs);
  if (bugNum < 200) {
    res.send(`
    <h1>${bugNum} little bugs in the code</h1>
    <a href='/bugs/${(bugNum += 2)}'>Pull one down, patch it around</a>
    `);
  } else {
    res.send(`
    <h1>${bugNum} little bugs in the code</h1>
    <a href='/bugs'>Too many bugs!! Start over!</a>
    `);
  }
});

//POKEMON EXPRESS WELCOME PAGE
app.get('/', (req, res) => {
  res.send('Welcome 99 Pokemon');
});

//POKEMON LIST
app.get('/pokemon', (req, res) => {
  res.send(pokemon);
});

app.get('/pokemon/search', (req, res) => {
  let searchInput = req.query.name;

  let foundPokemon = pokemon.find(
    (eachPokemon) =>
      eachPokemon.name.toLowerCase() === searchInput.toLowerCase()
  );

  if (foundPokemon) {
    res.send([foundPokemon]);
  } else {
    res.send([]);
  }
});

app.get('/pokemon/:indexOfArray', (req, res) => {
  const { indexOfArray } = req.params;

  if (pokemon[indexOfArray]) {
    res.send(pokemon[indexOfArray]);
  } else {
    res.send(`Sorry, no pokemon found at ${indexOfArray}`);
  }
});

// ROUTES FOR NEW PROJECT NAME GENERATOR
app.get('/:verb/:adjective/:noun', (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

// EXPORT
module.exports = app;
