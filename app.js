//dependencies

const express = require("express");
const pokemon = require("./models/pokemon");
console.log(pokemon[0]);

//config

const app = express();

//routes

app.get("/:v/:a/:n", (req, res) => {
  const { v, a, n } = req.params;
  res.send(`Congratulations on starting a new project called ${v}-${a}-${n}!`);
});

app.get("/bugs", (req, res) => {
  res.send(
    `<div>
      <h3>99 little bugs in the code</h3>
      <a href='/bugs/101'>pull one down, patch it around</a>
    </div>`
  );
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  if (numberOfBugs > 200) {
    res.send(`<a href='/bugs'>start over</a>`);
  } else {
    res.send(
      `<div>
        ${numberOfBugs} little bugs in the code  
         <a href='/bugs/${
           Number(numberOfBugs) + 2
         }'>pull one down, patch it around</a></div>`
    );
  }
});

app.get("/pokemon", (req, res) => {
  res.send(`<div>${pokemon.map((e) => e.name)}<div>`);
});

app.get("/pokemon/search/", (req, res) => {
  const { name } = req.query;
  const found = pokemon.find(
    (e) => e.name.toLowerCase() === name.toLowerCase()
  );

  if (found) {
    res.send([found]);
  } else {
    res.send([]);
  }
});

app.get("/pokemon/:indexOfArray", (req, res) => {
  const { indexOfArray } = req.params;
  if (!pokemon[Number(indexOfArray)]) {
    res.send(`No such pokemon found at /pokemon/${indexOfArray}`);
  } else {
    res.send(
      `<img src='${pokemon[Number(indexOfArray)].img}' alt=${
        pokemon[Number(indexOfArray)].name
      }/>`
    );
  }
});
//exports

module.exports = app;
