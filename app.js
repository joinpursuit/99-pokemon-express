const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json")


app.get("/", (request, response) => {
    console.log("GET request received for / route");
    response.send("Welcome 99 Pokemon");
});

app.get("/bugs", (request, response) => {
    console.log("GET request received for /bugs route");
    response.send("<h1>99 little bugs in the code<h1/>" + `<a href='http://localhost:8888/bugs/101'>Pull one down, patch it around</a>`);
});

app.get("/bugs/:numOfBugs", (request, response) => {
    let { numOfBugs } = request.params;
    if (numOfBugs < 200) {
        let plusTwo = Number(numOfBugs) + 2;
        response.send(`${numOfBugs} little bugs in the code <a href="http://localhost:8888/bugs/${plusTwo}">Pull one down, patch it around</a>`);
    } else {
        response.send(`<a href="http://localhost:8888/bugs/">Too many bugs!! Start over!</a>`);
    }
});

app.get("/pokemon", (request, response)=>{
    response.json(pokemon);
});

app.get("/:verb/:adjective/:noun", (request, response) => {
    let { verb, adjective, noun } = request.params;
    response.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`);
});

module.exports = app; 