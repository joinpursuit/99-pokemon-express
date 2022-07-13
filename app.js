// DEPENDENCIES
const express = require('express');
const pokemon = require('./models/pokemon.json');

// CONFIGURATION
const app = express();

// ROUTES
//home route
app.get('/', (req, res) => {
  res.send('Welcome 99 Pokemon');
});

// //bugs route
app.get('/bugs', (req, res) => {
  //this will never be reached
  res.send(`
      <h1>99 little bugs in the code</h1>
      <a href="/bugs/101">pull one down, patch it around</a>

    `);
});

// //bugs/specific bugs variable route
app.get('/bugs/:numberOfBugs', (req, res) => {
  const { numberOfBugs } = req.params;

  if (numberOfBugs < 200) {
    res.send(
      `${numberOfBugs} little bugs in the code  <a href="/bugs/${
        Number(numberOfBugs) + 2
      }">Pull one down, patch it around</a>`
    );
  } else {
    res.send(`Too many bugs!! Start over!<a href="/bugs">next</a>`);
  }
});

// // ROUTES

app.get('/pokemon', (req, res) => {
  res.json(pokemon);
});

app.get('/pokemon/search/', (req, res) => {
  //this will never be reached
  let searchedName = req.query.name;

  const foundPokemon = pokemon.find((ele) => {
    return searchedName.toLowerCase() === ele.name.toLowerCase();
  });
  if (foundPokemon) {
    res.json([foundPokemon]);
  } else {
    res.send('[]');
  }
});

app.get('/pokemon/:indexOfArray', (request, response) => {
  const { indexOfArray } = request.params;
  if (pokemon[indexOfArray]) {
    response.send(pokemon[indexOfArray]);
  } else {
    response.send(`Sorry, no pokemon found at ${indexOfArray}`);
  }
});

//
app.get('/:verb/:adjective/:noun', (req, res) => {
  const { verb, adjective, noun } = req.params;

  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});
// EXPORT
module.exports = app;
