// DEPENDENCIES
const express = require('express');

// CONFIGURATION
const app = express();
const pokemon = require('./models/pokemon.json');

// jumping-joyous-jellybean
app.get('/:verb/:adjective/:noun', (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

//99 Little Bugs In the Code

app.get('/bugs', (req, res) => {
  res.send(
    "<h1>99 little bugs in the code</h1><a href='/bugs/101'>pull one down, patch it around</a>"
  );
});

app.get('/bugs/:numberOfBugs', (req, res) => {
  const { numberOfBugs } = req.params;

  if (Number(numberOfBugs) >= 200) {
    res.send(
      `<h1>99 little bugs in the code</h1>${numberOfBugs} little bugs in the code<a href='/bugs'>Too many bugs!! Start over!</a>`
    );
  } else {
    res.send(
      `<h1>99 little bugs in the code</h1>${numberOfBugs} little bugs in the code<a href='/bugs/${
        Number(numberOfBugs) + 2
      }'>Pull one down\, patch it around</a>`
    );
  }
});

//Poke-Express

app.get('/', (req, res) => {
  res.send('Welcome 99 Pokemon');
});

app.get('/pokemon', (req, res) => {
  res.send(pokemon);
});

app.get('/pokemon/search', (req, res) => {
    const pokemonExist = pokemon.find(({name}) => name.toUpperCase() === (req.query.name).toUpperCase());

    if (req.query.name && pokemonExist){
        res.send([pokemonExist])
    } else {
        res.send([])
    };
  });

app.get('/pokemon/:index', (req, res) => {
  const { index } = req.params;
  if (pokemon[index]) {
    res.send(pokemon[index]);
  } else {
    res.send('Sorry, no pokemon found at ' + index);
  }
});

module.exports = app;
