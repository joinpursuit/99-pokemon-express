// DEPENDENCIES
const express = require("express");

//CONFIGURATIONS
const app = express ()
const pokemon = require("./models/pokemon.json")
//ROUTES

app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon")
})
app.get("/pokemon", (req, res) => {
    res.send(pokemon)
})
 app.get("/pokemon/search", (req,res) => {
     //console.log(req.query.name)
     const name = req.query.name.toLowerCase();
     const result = pokemon.filter((pokemon) => {
         return pokemon.name.toLowerCase() === name
     })
     res.send(result)
 })
 app.get("/pokemon/:indexOfArray", (req, res) => {
    const { indexOfArray } = req.params;
    if (pokemon[indexOfArray]) {
      res.send(pokemon[indexOfArray]);
    } else {
      res.send(`Sorry, no pokemon found at ${indexOfArray}`);
    }
  });
  
  app.get("/bugs", (req, res) => {
    res.send(
      `99 little bugs in the code`
  
    );
  });
  
  app.get("/bugs/:numberOfBugs", (req, res) => {
    const { numberOfBugs } = req.params;
    if (numberOfBugs >= 200) {
      res.send(
        `<a href="/bugs/">Too many bugs!! Start over!</a>`
      );
    } else {
      res.send(`${numberOfBugs} little bugs in the code
        <a href="/bugs/${Number(numberOfBugs) + 2}">Pull one down, patch it around</a>
        `);
    }
  });
  
  app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb, adjective, noun } = req.params;
    res.send(
      `Congratulations on starting a new project called ${verb}-${adjective}-${noun}`
    );
  });
   //EXPORT
  module.exports = app;