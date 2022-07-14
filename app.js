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
      <a href="/bugs/101">Pull one down, patch it around</a>
    `
  );
});
app.get("/bugs/:numberOfBugs", (req, res) => {
	const { numberOfBugs } = req.params;
	// Validating num of bugs
	(Number(numberOfBugs) < 200) 
  ?
		res.send(
      `<h1>${numberOfBugs} little bugs in the code</h1> 
        <a href="/bugs/${Number(numberOfBugs) + 2}">Pull one down, patch it around</a>
      `
    )
  :    
		res.send(
      `<h1>Too many bugs!! Start over!</h1>
       <a href="/bugs">Start over</a>`
    )
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

// Pokemon view by index
app.get("/pokemon/:indexOfArray", (req, res) => {
  
	const { indexOfArray } = req.params;
  
  // Validating if pokemon's index exist
  res.send((pokemon[indexOfArray]) 
    ? pokemon[indexOfArray] 
    : `Sorry, no pokemon found at ${indexOfArray}`
  );
});

// Bonus

// Get all pokemon prettier list
app.get("/pokemon-pretty/", (req, res) => {
  let pokeList = '';
  pokemon.forEach((poke, index) => {
    pokeList += `<li><a href="/pokemon-pretty/${index}">${poke.name}</a></li>`;   
  })
	res.send(`<ul style="">${pokeList}</ul>`);
});

// Pokemon prettier view by index
app.get("/pokemon-pretty/:indexOfArray", (req, res) => {
  
	const { indexOfArray } = req.params;
  
  // Validating if pokemon's index exist
  res.send((pokemon[indexOfArray]) 
    ? getPrettyView(pokemon[indexOfArray]) 
    : `Sorry, no pokemon found at ${indexOfArray}`
  );
});

/**
 * getPrettyView() function generates a random index between 0 and array length
 * @param  {number} min min value equals to the first position
 * @return {number}     Number that represents a random index
 */
 function getPrettyView(poke) {
  let view = `
            <div style="width: 50%;margin: auto;text-align: center">
              <h2>${poke.name}</h2>
              <img src="${poke.img}" alt="${poke.name}" />
              <table style="margin: 2rem auto;border: 1px solid #CCC;border-radius: 3px;border-collapse:collapse;">
              <tr style="background-color: #457b9d;color: #FFF;text-align: center">
                <th style="padding: 1rem">classification</th>
                <th style="padding: 1rem">height</th>
                <th style="padding: 1rem">weight</th>
                <th style="padding: 1rem">happiness</th>
              </tr>
              <tr style="text-align: center">
                <td style="padding: 1rem">${poke.misc.classification}</td>
                <td style="padding: 1rem">${poke.misc.height}</td>
                <td style="padding: 1rem">${poke.misc.weight}</td>
                <td style="padding: 1rem">${poke.misc.happiness}</td>
              </tr>
            </table>
            <a style="text-align: center" href="/pokemon-pretty">Back to the list</a>
            </div>
            `;
  return view; 
}

module.exports = app;