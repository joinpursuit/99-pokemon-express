const express = require('express');
const app = express();

app.get('/bugs/:numberOfBugs', (require, response) => {
    const { numberOfBugs } = require.params;
    const number = Number(numberOfBugs);

    if (number > 200) {
        response.send(`

            <a href=${`/bugs`}>Too many bugs!! Start over!</a>
        `)
    } else {
        response.send(`
            ${numberOfBugs} little bugs in the code
            <a href=${`/bugs/${number+2}`}>pull one down, patch it around</a>
        `)
    }
});    

    

app.get('/bugs', (require, response) => {
    response.send(
        `99 little bugs in the code
        <a href=${`/bugs/101`}>pull one down, patch it around</a>`
    )
});

app.get('/:verb/:adjective/:noun', (require, response) => {
    const { verb, adjective, noun } = require.params
    response.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}`)
});

module.exports = app;