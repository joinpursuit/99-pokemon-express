const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send('Welcome 99 Pokemon');
});

app.get('/bugs', (request, response) => {
    response.send("<h1> 99 little bugs in the code </h1>");
});

// app.get('/bugs/:numberOfBugs', (request, response) => {
//     const { numberOfBugs } = request.params;
//     if ()
// });

app.get('/:verb/:adjective/:noun', (request, response) => {
    const { verb, adjective, noun } = request.params;
    if (verb === 'jumping' && adjective === 'joyous' && noun === 'jellybean') {
        response.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`);
    };
});

module.exports = app;