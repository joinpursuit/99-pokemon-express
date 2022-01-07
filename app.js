const express = require('express');
const app = express();

app.get('/', (request, response) => {
    console.log(`GET request received to get route ('/')`);
    response.send('Welcome to Express Minerals App');
});

module.exports = app;