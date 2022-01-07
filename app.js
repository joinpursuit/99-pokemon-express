const { response } = require('express');
const express = require('express');
const app = express();

app.get("/:verb/:adjective/:noun", (request, response) => {
    console.log("GET request received to route: /:verb/:adjective/:noun");
    const { verb, adjective, noun } = request.params
    response.send("Congratulations on starting a new project called " + verb + "-" + adjective + "-" + noun + "!");
});

module.exports = app;