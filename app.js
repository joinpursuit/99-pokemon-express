const express = require('express');
const app = express();
const pokemon = require('./models/pokemon.json');

app.get('/', (req, res) => {
  res.send('Welcome 99 Pokemon');
});

app.get('/bugs', (req, res) => {
  res.send(`<h1>99 little bugs in the code</h1>
      <a href="101">pull one down, patch it around</a>
  `);
});

app.get('/bugs/:numberOfBugs', (req, res) => {
  const { numberOfBugs } = req.params;
  const bugNum = Number(numberOfBugs);
  res.send(`<h1>${bugNum} little bugs in the code</h1>
        <a href="${bugNum < 200 ? bugNum + 2 : './'}">${
    bugNum < 200
      ? 'Pull one down, patch it around'
      : 'Too many bugs!! Start over!'
  }</a>`);
});

app.get('/pokemon', (req, res) => {
  res.send(pokemon);
});

app.get('/pokemon/search', (req, res) => {
  const { name } = req.query;
  const targetPokemon = pokemon.find(
    (e) => e.name.toLowerCase() === name.toLowerCase()
  );
  res.send(targetPokemon ? [targetPokemon] : []);
});

app.get('/pokemon/:index', (req, res) => {
  const { index } = req.params;
  res.send(pokemon[Number(index)] || 'Sorry, no pokemon found at ' + index);
});

app.get('/:verb/:adj/:noun', (req, res) => {
  const { verb, adj, noun } = req.params;
  const project = [verb, adj, noun].join('-');
  res.send('Congratulations on starting a new project called ' + project + '!');
});

module.exports = app;
