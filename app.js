const express = require("express");
const res = require("express/lib/response");
const app = express();
const pokemon = require("./models/pokemon.json");

// console.log(pokemon[0]);

app.get("/", (request, respond) => {
  respond.send("Welcome 99 Pokemon");
});

app.get("/:verb/:adjective/:noun", (request, respond) => {
  const { verb, adjective, noun } = request.params;
  respond.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

app.get("/bugs", (request, respond) => {
  //we start on hp bugs
  //click on link
  //
  respond.send(`
  <p>99 little bugs in the code </p>
  <a href='/bugs/101'> Pull one down, 
  patch it around </a>
  `);
});

app.get("/bugs/:numberOfBugs", (request, respond) => {
  //if over 201
  //then error link "Too many bugs!! Start over!"

  const buggies = Number(request.params.numberOfBugs);

  buggies > 199
    ? respond.send(`<a href="/bugs"> Too many bugs!! Start over! </a>`)
    : respond.send(`
    <p>${buggies} little bugs in the code</p> 
    <a href="/bugs/${buggies + 2}"> 
    Pull one down, 
    patch it around 
    </a>
    `);
});
// <p>${buggies} little bugs in the code </p>
//   </ br>
// <p> ${buggies} little bugs</p>

app.get("/pokemon", (request, respond) => {
  respond.send(pokemon);
});

app.get("/pokemon/:indexOfArray", (request, respond) => {
  const { indexOfArray } = request.params;
  if (pokemon[indexOfArray]) {
    respond.send(pokemon[indexOfArray]);
  } else {
    respond.send(`Sorry, no pokemon found at ${indexOfArray}`);
  }
});

module.exports = app;
