const express = require('express');
require('dotenv').config();
const app = express();

const pokemon = require('./models/pokemon.json');

app.get('/:verb/:adjective/:noun', (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

app.get('/bugs', (req, res) => {
  res.send(`<h1>99 little bugs in the code</h1>
    <a href="/bugs/101">pull one down, patch it around </a>`);
});

app.get('/bugs/:numberOfBugs', (req, res) => {
  let { numberOfBugs } = req.params;
  let numbugs = Number(numberOfBugs);

  if (numbugs < 200) {
    res.send(`<h1>${numbugs} little bugs in the code</h1>
      <a href="/bugs/${numbugs + 2}">Pull one down, patch it around</a> `);
  } else {
    res.send(`
        <h1>${numbugs} little bugs in the code</h1>
        <a href="/bugs">Too many bugs!! Start over!</a>`);
  }
});

app.get('/', (req, res) => {
  res.send('Welcome 99 Pokemon');
});

app.get('/pokemon', (req, res) => {
  res.send(pokemon);
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
