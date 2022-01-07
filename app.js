// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (request, response) => {
  console.log("GET request received to route: /");
  response.send("Welcome 99 Pokemon");
});

app.get("/jumping/joyous/jellybean", (request, response) => {
  response.send(
    "Congratulations on starting a new project called jumping-joyous-jellybean!"
  );
});

app.get("/bugs", (request, response) => {
  response.send(`99 little bugs in the code
      <a href = /bugs/101> pull one down, patch it around </a>`);
});

app.get("/bugs/101", (request, response) => {
  response.send(`101 little bugs in the code
  <a href = /bugs/103> pull one down, patch it around </a>`);
});

app.get("/bugs/:numberOfBugs", (request, response) => {
  const { numberOfBugs } = request.params;

  if (numberOfBugs < 200) {
    response.send(
      `${numberOfBugs} little bugs in the code <a href = /bugs/${
        Number(numberOfBugs) + 2
      }> pull one down, patch it around </a>`
    );
  } else {
    response.send(`<a href = /bugs> "Too many bugs!! Start over!"</a>`);
  }
});

// EXPORT
module.exports = app;
