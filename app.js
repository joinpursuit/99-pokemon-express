const express = require("express");
const app = express();
const engine = require('express-handlebars');
const pokemon = require("./models/pokemon");
// console.log(pokemon[1]);

// // Handlebars Middleware
app.engine('handlebars', engine.engine());
app.set('view engine', 'handlebars');

// let pokemonList 
app.get("/pokemon-pretty", (request, response) => {
  console.log("GET request received to route:  /pokemon-pretty/");
  response.render('index',   {title: 'pokemon List', pokemon

});
});




app.get("/", (request, response) => {
  console.log("GET request received to route:  /");
  response.send("Welcome 99 Pokemon");
});

//Route that takes 3 parameters in the URL
app.get("/:verb/:adjective/:noun", (request, response) => {
  const { verb, adjective, noun } = request.params;
  console.log(verb);
  console.log("GET request received to route:  /verb/:adjective/:noun");
  response.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}`
  );
});

//99 Little Bugs In the Code
app.get("/bugs", (request, response) => {
  console.log("GET request received to route:  /bugs");
  response.send("99 little bugs in the code");
});

app.get("/bugs/:number", (request, response) => {
  console.log("GET request received to route:  /bugs/:number");
  const { number } = request.params;
  if (number < 200) {
    response.send(
      `${number} little bugs in the code <a href=/bugs/${
        Number(number) + 2
      }> Pull one down, patch it around</a>`
    );
  } else {
    response.send("<a href=/bugs>Too many bugs!! Start over!</a>");
  }
});

app.get("/pokemon", (request, response) => {
  console.log("GET request received to route:  /pokemon");
  response.json(pokemon);
});

app.get("/pokemon/search?", (request, response) =>{
    const {name} = request.query;
    if(!pokemon.length) return []
    response.send(pokemon.filter(pkmon => pkmon.name.toLowerCase().includes(name.toLowerCase())));
  })
 
  
app.get("/pokemon/:indexOfArray", (request, response) => {
  const { indexOfArray } = request.params;
  console.log("GET request received to route:  /pokemon/:indexOfArray");
  if (pokemon[indexOfArray]) {
    response.send(pokemon[Number(indexOfArray)]);
  } else {
    response.send(`Sorry, no pokemon found at ${indexOfArray}`);
  }
});







module.exports = app;
