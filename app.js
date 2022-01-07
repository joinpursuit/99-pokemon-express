const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send('Welcome 99 Pokemon');
});

app.get('/bugs', (request, response) => {
    response.send("<h1> 99 little bugs in the code </h1>");
});

app.get('/bugs/:numberOfBugs', (request, response) => {
    const numberOfBugs = Number(request.params.numberOfBugs);
    if (numberOfBugs >= 200) {
        response.send("Too many bugs!! Start over!");
    } else {
        response.send(`
        ${numberOfBugs} little bugs in the code
        <a 
            href='http://localhost:8888/bugs/${numberOfBugs + 2}'>
            next
        </a>
        `);
    }
});

app.get('/:verb/:adjective/:noun', (request, response) => {
    const { verb, adjective, noun } = request.params;
    if (verb && adjective && noun) {
        response.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`);
    };
});

module.exports = app;