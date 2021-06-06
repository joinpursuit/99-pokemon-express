const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json");

app.get("/:verb/:adj/:noun", (req, res) => {
  const { verb, adj, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adj}-${noun}!`
  );
});

app.get("/bugs", (req, res) => {
  let { number_of_bugs } = req.params;
  number_of_bugs = 101;
  res.send(
    `99 little bugs in the code <br/>
            99 little bugs <br/>
            <a href="/bugs/${number_of_bugs}">Pull one down <br/> Patch it around </a>`
  );
});

app.get("/bugs/:number_of_bugs", (req, res) => {
  let { number_of_bugs } = req.params;
  if (number_of_bugs < 200) {
      res.send(`${number_of_bugs} little bugs in the code <br/>
        ${number_of_bugs}  little bugs <br/>
        <a href="/bugs/${
          Number(number_of_bugs) + 2
        }">Pull one down <br/> Patch it around </a>`);
  } else {
      res.send(`${number_of_bugs} little bugs in the code <br/>
      Too many little bugs <br/>
      <a href="/bugs">Start Over</a>`)
  }
});

app.get("/pokemon", (req, res) => {
    res.json(pokemon)
})

app.get("/pokemon/:indexOfArray", (req, res) => {
    const {indexOfArray} = req.params
    if (pokemon[indexOfArray]) {
        res.json(pokemon[indexOfArray])
    } else {
        res.status(404).send(`sorry, no pokemon found at /pokemon[${indexOfArray}]`);
    }
})

app.get("/pokemon/search", (req, res) => {
    const { pokemonName } = req.query
    const { name } = req.params

})


module.exports = app;
