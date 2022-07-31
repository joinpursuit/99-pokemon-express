const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json")

app.get('/',(_,response) => {
    response.send('Welcome 99 Pokemon')
}) 

app.get('/bugs', (_,response) => {
    response.send(
    `<h1>99 little bugs in the code </h1>   
    <a href='/bugs/101'>Pull one down, patch it around</a>`   
)
})
module.exports= app;


app.get('/bugs/:numberOfBugs', (request,response) => {
    const {numberOfBugs} = request.params;
    const amountOfBugs = Number(numberOfBugs) + 2;

    if (numberOfBugs < 200) {
        response.send(
        `<h1> ${numberOfBugs} little bugs in the code </h1>
        <a href='/bugs/${amountOfBugs}'>Pull one down, patch it around</a>
        `
        )
    } else {
        response.send(
            `Too many bugs!! Start over!`
        )
    } 
})

app.get('/pokemon',(_,response) => {
    response.send(pokemon)
})

app.get('/pokemon/search',(request, response) => {
    const {name} = request.query;
    const foundPokemon = pokemon.find(eachPokemon => eachPokemon.name.toLowerCase() === name.toLowerCase())
    response.send(foundPokemon === undefined ? [] : [foundPokemon])
})

app.get('/pokemon/:indexOfArray', (request,response) => {
    const {indexOfArray} = request.params;
    if (indexOfArray > 151) {
        response.send(`Sorry, no pokemon found at ${indexOfArray}`)
    }
    response.send(
        pokemon[indexOfArray]
    )
})


app.get('/:verb/:adjective/:noun', (request,response) => {
    const {verb,adjective,noun} = request.params
    response.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
}) 