 //
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Testing server')
})

app.get('/bugs', (req, res) => {
  res.send(`<p>99 little bugs in the code</p><a href="/bugs/${getNumber(0, 101)}">pull one down, patch it around</a>`)
})

app.get('/bugs/:numberOfBugs', (req, res) => {
  res.send(`<p>${req.params.numberOfBugs} little bugs in the code</p>${validateNumOfBugs(req.params.numberOfBugs)}`)
})

app.get('/:verb/:adjective/:noun', (req, res) => {
  res.send(`Congratulations on starting a new project called ${req.params.verb}-${req.params.adjective}-${req.params.noun}!`)
})

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