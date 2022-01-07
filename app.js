const express = require("express");
const app = express();

//New Project Name Generator
//params is a key on request but it is also an object -it itself also has keys on it.

app.get("/:verb/:adjective/:noun", (req, res) => {
  const verb = req.params.verb;
  const adjective = req.params.adjective;
  const noun = req.params.noun;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

//Poke-Express
// const pokemon = require("./pokemon.json");
// console.log(pokemon[0]);

//All Pokemon
// app.get("/pokemon", (request, response) => {
//   console.log("GET request received to route: /");
//   response.send(rock);
// });

module.exports = app;
