const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json");

app.get("/", (req, res) => {
	res.send("Welcome 99 Pokemon");
});

app.get("/:verb/:adj/:noun", (req, res) => {
	const { verb, adj, noun } = req.params;
	res.send(
		`Congratulations on starting a new project called ${verb}-${adj}-${noun}`
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
				}">Pull one down, patch it around </a>`);
	} else {
		res.send(`Too many bugs!! Start over!`);
	}
});

// gives the entire object for the API
app.get("/pokemon", (req, res) => {
	res.json(pokemon);
});

app.get("/pokemon/search?", (req, res) => {
	const { name } = req.query;
	res.json(
		pokemon.filter((pokemonName) => {
			return pokemonName.name.toLowerCase() === name.toLowerCase();
		})
	);
});

app.get("/pokemon/:indexOfArray", (req, res) => {
	const { indexOfArray } = req.params;
	if (pokemon[indexOfArray]) {
		res.json(pokemon[indexOfArray]);
	} else {
		res.status(404).send(`Sorry, no pokemon found at ${indexOfArray}`);
	}
});

module.exports = app;

// req.query: directly access the parsed query string parameters
// req.params: directly access the parsed route parameters from the path
