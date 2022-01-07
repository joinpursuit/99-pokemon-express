const { response } = require("express");
const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json");

app.get("/", (request, response) => { 
response.send("Welcome 99 Pokemon!");
})

app.get("/bugs", (request, response) => {
response.send(`<h1>99 little bugs in the code<h1> <br> <a href="/bugs/101">pull one down, patch it around</a>`);
});

app.get("/:verb/:adjective/:noun", (request, response) => {
const { verb, adjective, noun } = request.params;
response.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})








module.exports = app;