 //
const express = require('express');
const pokemon = require("./models/pokemon.json");
console.log(pokemon[0]);

const app = express();

// Routes

// Home
app.get('/', (req, res) => {
  res.send('Welcome 99 Pokemon App')
})

// New Project Name Generator route
app.get('/:verb/:adjective/:noun', (req, res) => {
  const { verb, adjective, noun } = request.params;

  res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})

// 99 Little Bugs In the Code routes
//
app.get('/bugs', (req, res) => {
  res.send(`<p>99 little bugs in the code</p><a href="/bugs/${getNumber(0, 101)}">pull one down, patch it around</a>`)
})
// 
app.get('/bugs/:numberOfBugs', (req, res) => {
  const { numberOfBugs } = req.params;

  res.send(`<p>${numberOfBugs} little bugs in the code</p>${validateNumOfBugs(numberOfBugs)}`)
})



/**
 ******************************************************************
 * * * * H E L P E R S * * *
 ******************************************************************
 */

 /**
 * [getNumber() function generates a random index between 0 and 101]
 * @param  {number} min [min value equals to be generated]
 * @param  {number} max [max value equals to be generated]
 * @return {number}     [Number that represents a number of bugs]
 */
 function getNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

/**
 * [validateNumOfBugs() function generates an anchor according the propper validation]
 * @param  {number} min [number that represents the current number of bugs]
 * @return {string}     [Dynamic anchor after validating params]
 */
function validateNumOfBugs(bugs) {
  bugs = (Number(bugs) + 2);
  return (bugs < 200) ?
                      `<a href="/bugs/${bugs}">pull one down, patch it around</a>`
                      :
                      `<a href="/bugs">Start over</a>`
}

module.exports = app;