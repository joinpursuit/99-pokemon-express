const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json");

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get("/bugs/:id", (req, res) => {
  const { id } = req.params;
  if (id < 200) {
    res.send(
      `${id} little bugs in the code <br></br> <a href=/bugs/${
        Number(id) + 2
      }>Pull one down, patch it around</a>`
    );
  } else {
    res.send("<a href=/bugs>Too many bugs!! Start over!</a>");
  }
});

app.get("/bugs", (req, res) => {
  res.send(
    ` <h1>99 little bugs in the code</h1> <a href=/bugs/101>Pull one down, patch it around</a>`
  );
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}`
  );
});

app.get("/pokemon", (req, res) =>{
    res.json(pokemon);
})

app.get("/pokemon/search?", (req, res) =>{
  const {name} = req.query;
  res.json(pokemon.filter((searchedPokemon) =>{
      return searchedPokemon.name.toLowerCase() === name.toLowerCase()
  }));
})

app.get("/pokemon/:indexOfArray", (req, res) =>{
    const {indexOfArray} = req.params;
    if(pokemon[indexOfArray]){
        res.json(pokemon[indexOfArray])
    }else{
        res.send(`Sorry, no pokemon found at ${indexOfArray}`);
    }
})

module.exports = app;


