const { response } = require('express');
const express = require('express');
const app = express();
const pokemon = require('./models/pokemon.json');
console.log(pokemon.length);
require('dotenv').config();

app.get('/', (request, response) => {
  response.send('Welcome 99 Pokemon');
});

app.get(`/:verb/:adjective/:noun`, (request, response) => {
  const { verb, adjective, noun } = request.params;

  response.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`,
  );
});
app.get('/bugs', (request, response) => {
  response.send('<h1>99 little bugs in the code<h1>');
});
app.get('/bugs/:number', (request, response) => {
  const { number } = request.params;
  if (number > 101) {
    response.send('Too many bugs!! Start over!');
  } else if (number <= 101) {
    response.send(
      `<a href = http://localhost:8888/bugs/${
        number + 2
      }>"199 little bugs in the code"<a>`,
    );
  }
});
app.get('/pokemon', (request, response) => {
  response.send(pokemon);
});
app.get('/pokemon/:search', (request, response) => {
  const { search } = request.params;
  let error = new Array();
  if (search > 151 || search < 0) {
    response.send(error);
  } else {
    response.send(`${pokemon[0].name}`);
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});
module.exports = app;
