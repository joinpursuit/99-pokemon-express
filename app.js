const express = require('express');
const app = express();

app.get('/:verb/:adjective/:noun', (require, response) => {
    const { verb, adjective, noun } = require.params
    response.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
});

module.exports = app;