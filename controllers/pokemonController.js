const express = require("express") 
const pokemon = express.Router()
const pokemonMonsters = require('../models/pokemon.json')
let searchResult  = []

const validateUrl = (req, res, next) =>{ 
    const http = 'http://'
    const https = 'https://'
    let fullUrl = req.protocol + '://' + req.get('host') + req.url

    if (fullUrl.substring(0,7) === http || fullUrl.substring(0,8) === https){ 
        return next()
     }else { 
         res
            .status(400)
            .send(`You forgot to start your url with http:// or https://`)
      }
 }

pokemon.use(validateUrl)

pokemon.get("/" , (req, res) => { 
    res.status(200).send(pokemonMonsters)
 })

 pokemon.get("/search",(req, res) =>{ 
    const query = req.query
    
    if( query.name){ 
        searchResult = pokemonMonsters.filter(pokemon => pokemon.name.toLowerCase() === query.name.toLowerCase())
       res.status(200).send(searchResult)

     }
 })

 pokemon.get("/:indexOfArray", (req, res) => { 
     const { indexOfArray } = req.params
     if (indexOfArray >= 0 && indexOfArray < pokemonMonsters.length){ 

         res.status(200).send(pokemonMonsters[indexOfArray])
     }else {

        res.status(400).send(`Sorry, no pokemon found at ${indexOfArray}`)
     }
  })



 module.exports = pokemon