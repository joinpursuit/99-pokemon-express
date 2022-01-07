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
  response.send(
    `101 little bugs in the code <a href = /bugs> pull one down, patch it around </a> + 2`
  );
});

// EXPORT
module.exports = app;
