const express = require("express");
const pokemon = require("./models/pokemon.json");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}`
  );
});

app.get("/bugs", (req, res) => {
  res.send(`<div> 
    <p>"99 little bugs in the code"</p>
    <a href="/bugs/101">pull one down, patch it around</a>
    </div>`);
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  if (numberOfBugs < 200) {
    res.send(`<div> 
<p>"${numberOfBugs} little bugs in the code"</p>
<a href="/bugs/${Number(numberOfBugs) + 2}">Pull one down, patch it around</a>
</div>`);
  } else {
    res.send(`<div> 
        <p>"${numberOfBugs} little bugs in the code"</p>
        <a href="/bugs/">Too many bugs!! Start over!</a>
        </div>`);
  }
});

app.get("/pokemon", (req, res) => {
  //const pokeNames = pokemon.map((pokemon) => pokemon.name);
  //res.send(pokeNames);
  res.send(pokemon);
});

app.get("/pokemon/search", (req, res) => {
  const { name } = req.query;

  const searchResult = pokemon.filter(
    (pokemon) => pokemon.name.toLowerCase() === name.toLowerCase()
  );

  res.send(searchResult);
});

app.get("/pokemon/:indexOfArray", (req, res) => {
  const { indexOfArray } = req.params;
  if (pokemon[indexOfArray]) {
    res.send(pokemon[indexOfArray]);
  } else {
    res.send(`Sorry, no pokemon found at ${indexOfArray}`);
  }
});

app.get("/pokemon-pretty/", (req, res) => {
  const pokeNames = pokemon.map((pokemon) => pokemon.name);
  
  pokeNames.map((name, i) => console.log(i + name));
  res.send(
    pokeNames
      .map((name, i) => `<a href="/pokemon-pretty/${i}">${name}</a> <br>`)
      .join(" ")
  );
});



app.get("/pokemon-pretty/:indexOfArray", (req, res) => {
  const { indexOfArray } = req.params;
  if (pokemon[indexOfArray]) {
    res.send(
      `<h1>${pokemon[indexOfArray].name}</h1> <br> <img src=${pokemon[indexOfArray].img} > <br> <h3>Happiness: ${pokemon[indexOfArray].misc.happiness}</h3>`
    );
  } else {
    res.send(`Sorry, no pokemon found at ${indexOfArray}`);
  }
});
module.exports = app;
