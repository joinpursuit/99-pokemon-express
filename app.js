const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json");

app.get("/", (request, response) => {
  console.log("GET request received to route: /");
  response.send("Welcome 99 Pokemon");
});

app.get("/:verb/:adjective/:noun", (request, response) => {
  const { verb, adjective, noun } = request.params;
  response.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

app.get("/bugs", (request, response) => {
  response.send(
    `<h1>99 little bugs in the code</h1>
    <a href="/bugs/101">pull one down, patch it around</a>`
  );
});

app.get("/bugs/:numberOfBugs", (request, response) => {
  const { numberOfBugs } = request.params;
  const numOfBugs = Number(numberOfBugs);
  response.send(`<h1>${numOfBugs} little bugs in the code</h1>
  <a href="${numOfBugs < 200 ? numOfBugs + 2 : "./"}">${
    numOfBugs < 200
      ? "Pull one down, patch it around"
      : "Too many bugs!! Start over!"
  }</a>`);
});

module.exports = app;
