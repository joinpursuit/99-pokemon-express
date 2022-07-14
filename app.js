const express = require("express");
const app = express();
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
    `<h1>99 little bugs in the code</h1>
     <a href="/bugs/101">Pull one down, patch it around</a>`
  );
});
app.get("/bugs/:numberOfBugs", (req, res) => {
	const { numberOfBugs } = req.params;
	// Validating num of bugs
	(Number(numberOfBugs) < 200) 
  ?
		res.send(
      `<div style="padding: 4rem;margin: 0;height: 100vh;text-align: center;font-size: 4rem;text-decoration: underline;background-color:#0081a7;color: #FFF">
        <h1>${numberOfBugs} little bugs in the code</h1> 
        <a href="/bugs/${Number(numberOfBugs) + 2}">Pull one down, patch it around</a>
       </div>
      `
    )
  :    
		res.send(`<h1>Too many bugs!! Start over!</h1><a href="/bugs">Start over</a>`)
});

// Pokemon

// Get all pokemon data
app.get("/pokemon", (req, res) => {
	res.send(pokemon);
});

// Search a pokemon for by name
app.get("/pokemon/search", (req, res) => {
   
	const { name } = req.query;
  // Looking at pokemon data for the search retrieved by param
	let findByName = pokemon.find((e) => {
		return e.name.toLowerCase() === name.toLowerCase();
	});

  // Validating if the pokemon's search was successfull
	res.send((findByName) ? [findByName] : []);
});


// View pokemon by index
app.get("/pokemon/:indexOfArray", (req, res) => {
  
	const { indexOfArray } = req.params;
  
  // Validating if pokemon's index exist
  res.send((pokemon[indexOfArray]) 
    ? pokemon[indexOfArray] 
    : `Sorry, no pokemon found at ${indexOfArray}`
  );
});

module.exports = app;