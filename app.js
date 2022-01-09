// const e = require("express");
const express = require("express");
// const res = require("express/lib/response");
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

// still having some problem with understanding i guess ...
// tryna get the number to show up.
app.get("/bugs/:numberOfBugs", (req, res) => {
	const { numberOfBugs } = req.params;
	const answer = Number(numberOfBugs);
	const total = String(Number(numberOfBugs) + 2);
	// res.send(`${answer} little bugs in the code
	// <a href= ${total ? answer + 2 : "/bugs"}">
	// ${
	// 	answer < 200
	// 		? "Pull one down, patch it around"
	// 		: "Too many bugs!! Start over!"
	// }</a>`);
	if (numberOfBugs >= 200) {
		res.send(`<a href="/bugs">Too many bugs!! Start over!</a>`);
		return;
	}
	res.send(
		`<h1>${numberOfBugs} little bugs in the code </h1> <a href="/bugs/${total}">Pull one down, patch it around</a>`
	);
});

// The pokemon app
app.get("/pokemon", (req, res) => {
	res.send(pokemon);
});

// sending a empty array when the pokemon isnt found ..
app.get("/pokemon/search", (req, res) => {
	const { name } = req.query;
	pokemon.find((e) =>
		e.name.toLowerCase() === name.toLowerCase() ? res.json([e]) : res.json([])
	);
});

// getting the pokemon depending on its index
app.get("/pokemon/:index", (req, res) => {
	let { index } = req.params;
	pokemon[index]
		? res.send(pokemon[req.params.index])
		: res.send(`Sorry, no pokemon found at ${index}`);
});

module.exports = app;
