// DEPENDENCIES
const express = require('express');
const pokemon = require('./models/pokemon.json');

// CONFIGURATION
const app = express();

// ROUTES
//home route
app.get('/', (req, res) => {
  res.send('Welcome to 99 Pokemon App');
});

//bugs route
app.get('/bugs', (req, res) => {
  //this will never be reached
  res.send(`
      <h1>99 little bugs in the code</h1>
      <a href="/bugs/101">pull one down, patch it around</a>
      
    `);
});

//bugs/specific bugs variable route
app.get('/bugs/:numberOfBugs', (req, res) => {
  const { numberOfBugs } = req.params;
  if (Number(numberOfBugs) === 101) {
    res.send(
      `<a href="/bugs/${
        Number(numberOfBugs) + 2
      }">Pull one down, patch it around</a>`
    );
  } else if (numberOfBugs < 200) {
    res.send(
      `<h1>${numberOfBugs} little bugs in the code </h1> <a href="/bugs/${
        Number(numberOfBugs) + 2
      }">Pull one down, patch it around</a>`
    );
  } else {
    res.send(
      `<h1>${numberOfBugs} little bugs in the code </h1><a href="/bugs"> Start over!</a>`
    );
  }
});

// ROUTES

app.get('/pokemon', (req, res) => {
  res.json(pokemon);
});

app.get('/pokemon/search/', (req, res) => {
  //this will never be reached
  let name = req.query.name;

  const pokemonFilter = pokemon.filter((ele) => {
    return name.toLowerCase() === ele.name.toLowerCase();
  });
  if (pokemonFilter.length > 0) {
    res.json(pokemonFilter);
  } else {
    res.send('[]');
  }
});

app.get('/pokemon/:indexOfArray', (req, res) => {
  //this will never be reached
  const { indexOfArray } = req.params;

  if (pokemon[indexOfArray].length > 0) {
    res.json([indexOfArray]);
  } else {
    res.send(`Sorry, no pokemon found at ${[indexOfArray]}`);
  }
});

// EXPORT
module.exports = app;
