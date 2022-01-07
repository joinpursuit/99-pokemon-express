const express = require('express');
const app = express();
const pokemon = require('./models/pokemon.json');


app.get('/', (request, response) => {
    response.send('Welcome 99 Pokemon'
    );
});

app.get('/:verb/:adjective/:noun', (request, response) => {
    const { verb, adjective, noun } = request.params;
    response.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
    );
});

module.exports = app;

// http://localhost:8888 