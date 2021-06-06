const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json");


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
  res.send(`<!DOCTYPE html>
   <html>
   <h1>99 little bugs in the code</h1>
   <a href="/bugs/number_of_bugs">pull one down, patch it around</a>
   </html>`);
});

app.get("/bugs/:number_of_bugs", (req, res) => {
  const { number_of_bugs } = req.params;
  if (number_of_bugs >= 200) {
    res.send(`<!DOCTYPE html>
        <html>
        <a href="/bugs">Too many bugs!! Start over!</a>
        </html>`);
  } else {
    res.send(`<!DOCTYPE html>
        <html>
        <h1> ${number_of_bugs} little bugs in the code</h1>
        <a href="/bugs/${
          Number(number_of_bugs) + 2
        }">Pull one down, patch it around</a>
        </html>`);
  }
});

app.get("/pokemon", (req, res) => {
    res.send(pokemon);
  
});

app.get("/pokemon/search", (req, res) => {
    const { name } = req.query;
    const matchingPokemon = pokemon.filter((p) => {
        return p.name.toLowerCase() === name.toLowerCase();
    })
    res.send(matchingPokemon)
})

app.get("/pokemon/:indexOfArray", (req, res) => {
    const { indexOfArray } = req.params;
    if(!pokemon[indexOfArray]) {
        res.status(404).send(`Sorry, no pokemon found at ${indexOfArray}`)
    } else {
        res.send(pokemon[indexOfArray])
    }
})


module.exports = app;
