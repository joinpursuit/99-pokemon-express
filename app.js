const express = require("express");
const pokemon = require("./models/pokemon.json");
const app = express();

//Routes
app.get("/", (request, response) => {
  console.log("get to /");
  response.send("Welcome 99 Pokemon");
});

app.get("/bugs", (request, response) => {
  console.log("get to /bugs");
  response.send(
    `99 little bugs in the code <a href=${"http://localhost:8888/bugs/101"}>pull one down, patch it around</a>`
  );
});
app.get("/bugs/:numberOfBugs", (request, response) => {
  console.log(request.params.numberOfBugs);
  request.params.numberOfBugs > 199
    ? response.send(`<a href=${"http://localhost:8888"}>Too many bugs!! Start over!</a>`)
    : response.send(
        `${request.params.numberOfBugs} little bugs in the code <a href=${`http://localhost:8888/bugs/${
          Number(request.params.numberOfBugs) + 2
        }`}>Pull one down, patch it around</a>`
      );
});

app.get("/pokemon", (request, response) => {
  console.log(pokemon);
  response.send(pokemon);
});

app.get("/pokemon/search/", (request, response) => {
  console.log(request.query);
  const { name } = request.query;
  const found = pokemon.find((poke) => poke.name.toLowerCase() === name.toLowerCase());
  found ? response.send([found]) : response.send([]);
});

app.get("/pokemon/:indexOfArray", (request, response) => {
  const { indexOfArray } = request.params;
  console.log(indexOfArray);
  pokemon[indexOfArray]
    ? response.send(pokemon[indexOfArray])
    : response.send(`Sorry, no pokemon found at ${indexOfArray}`);
});

app.get("/:verb/:adjective/:noun", (request, response) => {
  console.log(request.params);
  response.send(
    `Congratulations on starting a new project called ${request.params.verb}-${request.params.adjective}-${request.params.noun}`
  );
});

module.exports = app;
