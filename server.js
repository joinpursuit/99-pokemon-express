// requiring express
const express = require("express");
const res = require("express/lib/response");
// calling express
const app = express();

// inorder to use the dotenv...
require("dotenv").config();

app.get("/", (req, res) => {
	res.send("The data has been send");
});

// The Name generator
app.get("/:verb/:adjective/:noun", (req, res) => {
	let { verb, adjective, noun } = req.params;
	res.send(
		`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
	);
});

// The bug fix
app.get("/bugs", (req, res) => {
	res.send(`99 little bugs in the code <a href="/bugs/101">pull one down</a>`);
	// res.send(`<a href="/bugs/101">pull one down</a>`);
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log(` Listening on port ${PORT}  `);
});

// Congratulations on starting a new project called jumping-joyous-jellybean!

// On the home page (get "/bugs"), users should see:
//
// a link that says "pull one down, patch it around"
// this should link to /bugs/101, where the number represents the number of bugs remaining to fix
