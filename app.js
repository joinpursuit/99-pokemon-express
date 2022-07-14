const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Testing server')
})

app.get('/bugs', (req, res) => {
  res.send('<p>99 little bugs in the code</p><a href="/bugs/101">pull one down, patch it around</a>')
})

app.get('/bugs/:numberOfBugs', (req, res) => {
  res.send(`${req.params.numberOfBugs} little bugs in the code`)
})

app.get('/:verb/:adjective/:noun', (req, res) => {
  res.send(`Congratulations on starting a new project called ${req.params.verb}-${req.params.adjective}-${req.params.noun}!`)
})

module.exports = app;