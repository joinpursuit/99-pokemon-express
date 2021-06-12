const express = require('express');
const pokemon = require('./models/pokemon.json')
const app = express()

console.log(pokemon[0])

module.exports = app;