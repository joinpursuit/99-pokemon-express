const express = require("express");
const pokemon = require("./models/pokemon.json");
const app = express();

//Routes
app.get("/", (request, response) => {
  console.log("get to /");
  response.send("Welcome 99 Pokemon");
});

app.get("/bugs", (request, response) => {
  console.log("get to /bugs");
  response.send(
    `99 little bugs in the code <a href=${"http://localhost:8888/bugs/101"}>pull one down, patch it around</a>`
  );
});
app.get("/bugs/:numberOfBugs", (request, response) => {
  console.log(request.params.numberOfBugs);
  request.params.numberOfBugs > 199
    ? response.send(`<a href=${"http://localhost:8888"}>Too many bugs!! Start over!</a>`)
    : response.send(
        `${request.params.numberOfBugs} little bugs in the code <a href=${`http://localhost:8888/bugs/${
          Number(request.params.numberOfBugs) + 2
        }`}>Pull one down, patch it around</a>`
      );
});

app.get("/pokemon", (request, response) => {
  console.log(pokemon);
  response.send(pokemon);
});

app.get("/pokemon/search/:pokemonName", (request, response) => {
  console.log(request.query);
  const { name } = request.query;
  const found = pokemon.find((poke) => poke.name.toLowerCase() === name.toLowerCase());
  found ? response.send(found) : response.send([]);
});

app.get("/pokemon/:indexOfArray", (request, response) => {
  const { indexOfArray } = request.params;
  console.log(indexOfArray);
  pokemon[indexOfArray]
    ? response.send(pokemon[indexOfArray])
    : response.send(`Sorry, no pokemon found at ${indexOfArray}`);
});

app.get("/:verb/:adjective/:noun", (request, response) => {
  console.log(request.params);
  response.send(
    `Congratulations on starting a new project called ${request.params.verb}-${request.params.adjective}-${request.params.noun}`
  );
});
// app.get("/rocks/:index", (request, response) => {
//   console.log("get to /rocks");
//   console.log(request.params);
//   response.send(rock[request.params.index]);
// });

// app.get("/rocks/:index", (request, response) => {
//   console.log("get to /rocks");
//   response.send(rock[rock.indexOf(request.params.index)]);
// });

// app.get("/hello/:first/:last", (request, response) => {
//   console.log("get to /rocks");
//   console.log(request.params);
//   response.send(
//     `Hello, ${request.params.first.charAt(0).toUpperCase() + request.params.first.slice(1)} ${
//       request.params.last.charAt(0).toUpperCase() + request.params.last.slice(1)
//     }`
//   );
// });

// app.get("/add", (request, response) => {
//   console.log("/add");
//   console.log(request.query);
//   const { num1, num2 } = request.query;
//   response.send("is:" + (Number(num1) + Number(num2)));
// });

module.exports = app;
