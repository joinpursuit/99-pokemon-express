const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json");


app.get("/", function (req, res) {
  res.send("Welcome 99 Pokemon");
});
app.get("/:verb/:adjective/:noun", function (req, res) {
    const { verb, adjective, noun } = req.params;
    res.send(
      `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
    );
  });

app.get("/bugs", function (req, res) {
  res.send(`
<p>99 little bugs in the code</p>
 <a href="http://localhost:8888/bugs/101">pull one down, patch it around</a>`);
});
app.get("/bugs/:numberOfBugs", function (req, res) {
  const { numberOfBugs} = req.params;
  theSumOfBugs = Number(numberOfBugs) + 2
  if (numberOfBugs < 200) {
    res.send(`<p>${numberOfBugs} little bugs in the code </p>
    <a href="http://localhost:8888/bugs/${theSumOfBugs}"> Pull one down, patch it around </a>
    `);
  } else {
    res.send(`<a href="http://localhost:8888/bugs">Too many bugs!! Start over!</a>`)
  }
});
app.get ("/pokemon", function (req, res) {
    res.send(pokemon)
});
app.get("/pokemon/search/", function (req, res) {
    const {name} = req.query 

    if (!pokemon.filter((pokemn) => {
        return pokemn.name === name})
    ){
        res.send("[]")
    }else {
        res.send(pokemon.filter((pokemn) => {
            return pokemn.name.toLowerCase() === name.toLowerCase();
        }))
    }
})
app.get ("/pokemon/:indexOfArray", function (req, res) {
    const {indexOfArray} = req.params;
    if (!pokemon[indexOfArray]) {
        res.send(`Sorry, no pokemon found at ${indexOfArray}`)
    } else {
        res.send(pokemon[indexOfArray])
    }
})



module.exports = app;

