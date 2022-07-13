const express = require("express");
const app = express();

require("dotenv").config();
//const PORT = process.env.PORT;

const pokemon = require("./models/pokemon.json");

//Home
app.get("/", (request, response) => {
	response.send("Welcome 99 Pokemon");
});

//Pokemon
app.get("/pokemon", (request, response) => {
	response.send(pokemon);
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

//99 Little bugs in the code
app.get("/bugs", (request, response) => {
	response.send(`99 little bugs in the code \n 99 little bugs \n
    Pull one down, patch it around
    <a href="/bugs/101">Pull one down, patch it around</a>`);
});
app.get("/bugs/:numberOfBugs", (request, response) => {
	const { numberOfBugs } = request.params;
	//numberOfBugs = Number(numberOfBugs);
	if (Number(numberOfBugs) < 200) {
		response.send(`${numberOfBugs} little bugs in the code \n ${numberOfBugs} little bugs \n 
    <a href="/bugs/${Number(numberOfBugs) + 2}">Pull one down, patch it around</a>`);
	} else {
		response.send(`Too many bugs!! Start over!
    <a href="/bugs">Start over</a>`);
	}
});

//New Project Name Generator
app.get("/:verb/:adjective/:noun", (request, response) => {
	const { verb, adjective, noun } = request.params;
	response.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`);
});

// app.listen(PORT, () => {
// 	//console.log(`listening on port ${PORT}`);
// });

module.exports = app;
