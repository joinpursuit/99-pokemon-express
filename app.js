const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json");
// console.log(pokemon[0]);

app.get("/", (req, res) => {
  res.send(`Welcome 99 Pokemon`);
});

app.get("/bugs", (req, res) => {
  res.send(`<h1>99 little bugs in the code</h1>`);
});

app.get("/bugs/:number_of_bugs", (req, res) => {
  const { number_of_bugs } = req.params;
  if (number_of_bugs < 200) {
    res.send(`<p>${number_of_bugs} little bugs in the code</p>
    <a href=${Number(number_of_bugs) + 2}>Pull one down, patch it around</a>`);
  } else {
    res.send("Too many bugs!! Start over!");
  }
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}`
  );
});

app.get("/pokemon", (req, res) => {
  res.json(pokemon);
});

app.get("/pokemon/search?", (req, res) => {
  console.log(req.query)
  const {name} = req.query;
  res.json(pokemon.filter(pocketmonster => {
    return (pocketmonster.name === name || pocketmonster.name.toUpperCase() === name)
  }))
});
app.get("/pokemon/:indexOfArray", (req, res) => {
  // console.log(req.params);
  const { indexOfArray } = req.params;
  if (pokemon[indexOfArray]) {
    res.json(pokemon[indexOfArray]);
  } else {
      res.send(`Sorry, no pokemon found at ${indexOfArray}`);
  }
});


module.exports = app;
