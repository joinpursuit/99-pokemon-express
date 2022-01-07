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

app.get('/bugs', (request, response) => {
    response.send(`<h1>99 little bugs in the code</h1> 
    <a href='http://localhost:8888/bugs/101'>Pull one down, patch it around</a>`
    );
});

app.get('/pokemon', (request, response) => {
    response.send(pokemon)
});

app.get('/pokemon/:index', (request, response) => {
    const { index } = request.params;
    response.send(pokemon[index] || `Sorry, no pokemon found at ${index}`)
})





module.exports = app;

// http://localhost:8888 