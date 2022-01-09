// const pokemon = require("./pokemon.json");
// console.log(pokemon[0]);

// const app = pokemon()

// app.get("/pokemon", (req, res) => {
//     res.send(pokemon);
//   });

const express = require("express");
const pokemon = require("./models/pokemon.json")

const app = express();

app.get("/", (req,res) =>{
    res.send("Welcome to Pokemon App")
})

app.get("/pokemon", (req, res) => {
    res.send(pokemon);
  });

  module.exports = app;