const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json");
app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});
app.get("/bugs", (req, res) => {
  res.send(
    "99 little bugs in the code <br><a href='http://localhost:8888/bugs/99'>pull one down, patch it around</a>"
  );
});

app.get("/bugs/:nbr", (req, res) => {
  const { nbr } = req.params;
  if (Number(nbr) >= 200)
    res.send(
      `<a href=http://localhost:8888/bugs>Too many bugs!! Start over!</a>`
    );
  else
    res.send(
      `${Number(
        nbr
      )} little bugs in the code <br><a href=http://localhost:8888/bugs/${
        Number(nbr) + 2
      }>pull one down, patch it around</a>`
    );
});
app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});
//pokemon-pretty
app.get("/pokemon-pretty", (req, res) => {
  const pokemonHtml = pokemon.map(
    (poke) =>
      `<li>
      <h3>${poke.name}</h3>
      <div>${poke.type.join(" ")}</div>
      <img src=${poke.img} alt=${poke.name}/>
    </li>`
  );
  res.send(`<ol>${pokemonHtml}</ol>`);
});
//pokemon-pretty/:indexOfArray
app.get("/pokemon-pretty/:indexOfArray", (req, res) => {
  const { indexOfArray } = req.params;
  if (Number(indexOfArray) >= 99 || Number(indexOfArray) < 0)
    res.send(`Sorry, no pokemon found at ${indexOfArray}`);
  else {
    const poke = pokemon[indexOfArray];
    res.send(`<div>
                <h3>${poke.name}</h3>
                <div>${poke.type.join(" ")}</div>
                <img src=${poke.img} alt=${poke.name}/>
              </div>`);
  }
});
//pokemon/search
app.get("/pokemon/search", (req, res) => {
  const { name } = req.query;
  const pokeFound = pokemon.find(
    (poke) => poke.name.toLowerCase() === name.toLowerCase()
  );
  if (!pokeFound) res.send([]);
  else res.send([pokeFound]);
});
app.get("/pokemon/:indexOfArray", (req, res) => {
  const { indexOfArray } = req.params;
  if (Number(indexOfArray) >= 99 || Number(indexOfArray) < 0)
    res.send(`Sorry, no pokemon found at ${indexOfArray}`);
  else res.send(pokemon[indexOfArray]);
});
app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

module.exports = app;
