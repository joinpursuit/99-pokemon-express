const { response } = require('express');
const express = require('express');
const app = express();

app.get("/", (request, response) => {
    console.log("GET request received to route: /");
    response.send("Welcome 99 Pokemon");
});

app.get("/:verb/:adjective/:noun", (request, response) => {
    console.log("GET request received to route: /:verb/:adjective/:noun");
    const { verb, adjective, noun } = request.params
    response.send("Congratulations on starting a new project called " + verb + "-" + adjective + "-" + noun + "!");
});

app.get("/bugs", (request, response) => {
    console.log("GET request received to route: /bugs");
    const message = "99 little bugs in the code"
    response.send(`<h1>${message}</h1>`);
});

module.exports = app;