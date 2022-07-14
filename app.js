const express = require("express");
const app = express();

require("dotenv").config();
//const PORT = process.env.PORT;

const pokemon = require("./models/pokemon.json");

// Routes

// Home
app.get("/", (req, res) => {
	res.send("Welcome 99 Pokemon");
});

// New Project Name Generator
app.get("/:verb/:adjective/:noun", (req, res) => {
	const { verb, adjective, noun } = req.params;
	res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
    );
});

//99 Little bugs in the code
app.get("/bugs", (req, res) => {
	res.send(
    `99 little bugs in the code 
    \n 99 little bugs 
    \n Pull one down, patch it around
    <a href="/bugs/101">Pull one down, patch it around</a>`
  );
});
app.get("/bugs/:numberOfBugs", (req, res) => {
	const { numberOfBugs } = req.params;
	// Validating num of bugs
	(Number(numberOfBugs) < 200) 
  ?
		res.send(
      `<h1>${numberOfBugs} little bugs in the code ${numberOfBugs} little bugs</h1> 
      <a href="/bugs/${Number(numberOfBugs) + 2}">Pull one down, patch it around</a>`
    )
  :    
		res.send(`Too many bugs!! Start over!
      <a href="/bugs">Start over</a>`
    )
});

//Pokemon
app.get("/pokemon", (req, res) => {
	res.send(pokemon);
});

app.get("/pokemon/search", (request, response) => {
	const { name } = request.query;
	let foundPokemon = pokemon.find((poke) => {
		return poke.name.toLowerCase() === name.toLowerCase();
	});
	if (foundPokemon != undefined) {
		let dummy = [foundPokemon];
		response.send(dummy);
	} else {
		response.send([]);
	}
});

app.get("/pokemon/:indexOfArray", (request, response) => {
	const { indexOfArray } = request.params;
	if (pokemon[indexOfArray]) {
		response.send(pokemon[indexOfArray]);
	} else {
		response.send(`Sorry, no pokemon found at ${indexOfArray}`);
	}
});

module.exports = app;