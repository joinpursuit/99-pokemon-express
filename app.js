const express = require("express");
const app = express();
const pokemon = require("./pokemon.json");
app.get("/bugs", (req, res) => {
  res.send(
    "99 little bugs in the code <br><a href='http://localhost:8888/bugs/99'>pull one down, patch it around</a>"
  );
});

app.get("/bugs/:nbr", (req, res) => {
  const { nbr } = req.params;
  if (Number(nbr) + 2 > 200)
    res.send(`<a href=http://localhost:8888/bugs>Start over</a>`);
  else
    res.send(
      `${
        Number(nbr) + 2
      } little bugs in the code <br><a href=http://localhost:8888/bugs/${
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
      <a href=${poke.url}>
        <h3>${poke.name}</h3>
      </a>
    </li>`
  );
  res.send(`<ol>${pokemonHtml}</ol>`);
});
//pokemon-pretty/:indexOfArray
app.get("/pokemon-pretty/:indexOfArray", (req, res) => {
  const { indexOfArray } = req.params;
  if (Number(indexOfArray) >= 99 || Number(indexOfArray) < 0)
    res.send(`sorry, no pokemon found at /pokemon[${indexOfArray}]`);
  else {
    const poke = pokemon[indexOfArray];
    res.send(`<a href=${poke.url}>
                <h3>${poke.name}</h3>
              </a>`);
  }
});
//pokemon/search
app.get("/pokemon/search", (req, res) => {
  const { name } = req.query;
  const pokeFound = pokemon.find((poke) => poke.name === name);
  if (!pokeFound) res.send("No such pokemon");
  else res.send(pokeFound);
});
app.get("/pokemon/:indexOfArray", (req, res) => {
  const { indexOfArray } = req.params;
  if (Number(indexOfArray) >= 99 || Number(indexOfArray) < 0)
    res.send(`sorry, no pokemon found at /pokemon[${indexOfArray}]`);
  else res.send(pokemon[indexOfArray]);
});
app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

module.exports = app;
