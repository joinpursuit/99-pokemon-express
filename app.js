const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json");

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
// app.get("/bugs/:numberOfBugs", (request, response) => {
//   console.log(request.params.numberOfBugs);
//   request.params.numberOfBugs > 199
//     ? response.send("Too many bugs!! Start over!")
//     : response.send(`${request.params.numberOfBugs} little bugs in the code`);
// });

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
