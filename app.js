// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();

// ROUTES
// app.get("/", (req, res) => {

// })

// NEW PROJECT NAME GENERATOR
app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = request.params
  res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})

// 99 LITTLE BUGS IN THE CODE
app.get("/", (req, res) => {
  res.send('Welcome 99 Pokemon')
});

app.get("/bugs", (req, res) => {
  res.send(`<p>99 little bugs in the code</p><a href="/bugs/101">pull one down, patch it around</a>`);
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  if (numberOfBugs >= 200){
    res.send(`<a href="/bugs">Too many bugs!! Start over!</a>`)
  } else {
    res.send(`<h1>${numberOfBugs} little bugs in the code</h1><a href='/bugs/${Number(numberOfBugs) + 2}'>Pull one down, patch it around</a>`)
  }
})

// POKE-EXPRESS
app.get("/pokemon", (req, res) => {
  res.send(pokemon)
});

app.get("/pokemon/search", (req, res) => {
  const { name } = req.query
  res.send(pokemon.filter(pokemon => pokemon.name.toLowerCase() === name.toLowerCase()))
})

app.get("/pokemon/:indexOfArray", (req, res) => {
  const { indexOfArray } = req.params
  if (pokemon[indexOfArray]) {
    res.send(pokemon[indexOfArray])
  } else {
    res.send(`Sorry, no pokemon found at ${[indexOfArray]}`)
  }
})

module.exports = app;