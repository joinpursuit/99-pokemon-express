const e = require("express");
const express = require("express");
const res = require("express/lib/response");
// calling express
const app = express();
const pokemon = require("./models/pokemon.json");

app.get("/", (req, res) => {
	res.send("Welcome 99 Pokemon");
});

// The Name generator
app.get("/:verb/:adjective/:noun", (req, res) => {
	let { verb, adjective, noun } = req.params;
	res.send(
		`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
	);
});

// The bug fix - first step --
app.get("/bugs", (req, res) => {
	res.send(
		`99 little bugs in the code <a href="/bugs/101">pull one down, patch it around</a>`
	);
	// res.send(`<a href="/bugs/101">pull one down</a>`);
});

// tryna get the number to show up.
app.get("/bugs/:numberOfBugs"),
	(req, res) => {
		let { numberOfBugs } = req.params;
		if (numberOfBugs >= 200) {
			res.send(` <a href="/">Too many bugs!! Start over</a>`);
			return;
		}
		res.send(numberOfBugs + 2);

		// res.send(String(numberOfBugs) + "little bugs in the code");
	};

// The pokemon app

app.get("/pokemon", (req, res) => {
	res.send(pokemon);
});

// sending a empty array when the pokemon isnt found ..
app.get("/pokemon/search", (req, res) => {
	const { search } = req.params;
	const { name } = req.query;
	pokemon.find((e) =>
		e.name.toLowerCase() === name.toLowerCase() ? res.json([e]) : res.send([])
	);
});

// getting the pokemon depending on its index
app.get("/pokemon/:index", (req, res) => {
	let { index } = req.params;
	if (pokemon[index]) {
		res.send(pokemon[req.params.index]);
	} else {
		res.send(`Sorry, no pokemon found at ${index}`);
	}
});

module.exports = app;
