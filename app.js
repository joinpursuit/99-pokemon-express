// DEPENDENCIES
const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const pokemon = require("./models/pokemon.json");
// console.log(pokemon[0]);

// CONFIGURATION
const app = express();

// ROUTES
app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.status(200)
    .send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!
    `);
});

// 99 Little Bugs In the Code
app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  if (Number(numberOfBugs) > 200) {
    res.send(
      '<h1><a href="http://localhost:8888/bugs/">pull one down</a></h1>'
    );
    return;
  } else {
    res.send(
      `<h1>${numberOfBugs} little bugs in the code</h1><a href='http://localhost:8888/bugs/${
        Number(numberOfBugs) + 2
      }'>pull one down, patch it around</a>`
    );
  }
});

app.get("/bugs/", (req, res) => {
  res.send(
    "<h1>99 litte bugs in the code</h1><a href='http://localhost:8888/bugs/101'>pull one down, patch it around</a>"
  );
});

// POKE-EXPRESS
// app.get("/pokemon", (req, res) => {
//   res.send();
// });

app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

// EXPORT
module.exports = app;
