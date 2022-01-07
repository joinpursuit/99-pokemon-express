const { response } = require("express");
const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json");

app.get("/", (request, response) => { 
response.send("Welcome 99 Pokemon!");
})

app.get("/bugs", (request, response) => {
response.send(`99 little bugs in the code <br> <a href="/bugs/101">pull one down, patch it around</a>`);
});

app.get("/bugs/:number_of_bugs", (request, response) => {
    const { number_of_bugs } = request.params;
    if (number_of_bugs < 200) {
    response.send(`${number_of_bugs} little bugs in the code <br> <a href="/bugs/${Number(number_of_bugs) + 2
    }">Pull one down, patch it around</a>`
    );} 
    else {
      response.send(`Too many bugs!! Start over! <br> <a href="/bugs">Start Over</a>`);
    }
  });
  

app.get("/:verb/:adjective/:noun", (request, response) => {
const { verb, adjective, noun } = request.params;
response.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})








module.exports = app;