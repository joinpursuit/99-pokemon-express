// DEPENDENCIES
const express = require("express");
const bug = require("./bug");
const pokemon = require("./models/pokemon.json")
// console.log(pokemon[0])
// CONFIGURATION
const app = express();

// ROUTES
http://localhost:8888
app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});
// http://localhost:8888/jumping/joyous/jellybean
app.get("/:verb/:adjective/:noun", (req, res) => {
  res.send(
    `Congratulations on starting a new project called ${req.params.verb}-${req.params.adjective}-${req.params.noun}!`
  );
});
// http://localhost:8888/bugs
app.get("/bugs", (req, res) => {
  console.log("Get request received to route: /bugs");
  // res.send(bug[0])
  res.send(`${bug[0]} <a href="/bugs/101">${bug[2]}`);
});
// http://localhost:8888/bugs/1000
app.get("/bugs/:numberOfBugs", (request, response) => {
  const { numberOfBugs } = request.params;
  const numOfBugs = Number(numberOfBugs);

  response.send(`<p>${numOfBugs} little bugs in the code</p>
    <a href="${numOfBugs < 200 ? numOfBugs + 2 : "/"}">${
    numOfBugs < 200
      ? `${bug[2]}`
      : `${bug[4]}`
  }
  </a>`);
});
//  http://localhost:8888/pokemon
app.get("/pokemon", (req, res) => {
    res.send(pokemon);
  });
//   http://localhost:8888/pokemon/search?name=oddish
  app.get("/pokemon/search", (request, response) => {
    // const { name } = request.query;
    const poki = pokemon.find(
      (pokemon) => pokemon.name.toLowerCase() === request.query.name.toLowerCase()
    );
    response.send(poki ? [poki] : []);
  });
// http://localhost:8888/pokemon/5
  app.get("/pokemon/:index", (request, response) => {
    const { index } = request.params;
    response.send(
      pokemon[Number(index)] || "Sorry, no pokemon found at " + index
    );
  });


//   EXPORT
module.exports = app;
