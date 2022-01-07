const express = require('express');
const app = express();
const pokemon = require('./models/pokemon.json');


app.get('/', (request, response) => {
    response.send('Welcome 99 Pokemon'
    );
});


module.exports = app;

// http://localhost:8888 