const app = require('express')();
const pokemon = require(`${__dirname}/models/pokemon.json`);

app.get('/', (req, res) => {
  res.end('Welcome 99 Pokemon');
});

app.get('/:verb/:adjective/:noun', (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.end(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

app.get('/bugs', (req, res) => {
  res.end('99 little bugs in the code');
});

app.get('/bugs/:numberOfBugs', (req, res) => {
  const bugCount = Number(req.params.numberOfBugs);
  res.send(`<h1>${bugCount} little bugs in the code</h1>
            <a href="${bugCount < 200 ? bugCount + 2 : '/'}">${
    bugCount < 200
      ? 'Pull one down, patch it around'
      : 'Too many bugs!! Start over!'
  }</a>`);
});

app.get('/pokemon', (req, res) => {
  res.end(JSON.stringify(pokemon));
});

app.get('/pokemon/search', (req, res) => {
  const name = req.query.name
    .split('')
    .map((letter, idx) =>
      idx === 0 ? letter.toUpperCase() : letter.toLowerCase()
    )
    .join('');
  let result = pokemon.filter((currMon) => currMon.name === name) || [];
  res.end(JSON.stringify(result));
});

app.get('/pokemon/:indexOfArray', (req, res) => {
  const mon = pokemon[req.params.indexOfArray];
  if (!mon) {
    res.end(`Sorry, no pokemon found at ${req.params.indexOfArray}`);
  } else {
    res.end(JSON.stringify(mon));
  }
});

module.exports = app;
