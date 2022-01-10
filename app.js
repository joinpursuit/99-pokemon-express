const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();
const pokemon = require("./models/pokemon.json")

app.get('/',(request,response) => {
    response.send('Welcome 99 Pokemon')
}) 

app.get('/bugs', (request,response) => {
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
            // <a href='/bugs'>Start over </a>
            // `
        )
    } 
})

app.get('/pokemon',(request,response) => {
    response.send(pokemon)
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


// app.get('/pokemon/search/:userInput',(request, response) => {
//     const {userInput} = request.params;
//     const foundPokemon = pokemon.find(eachPokemon => eachPokemon.name.toLowerCase() === userInput.toLowerCase())
//     // const parsedPokemon = JSON.parse(foundPokemon)
//     response.send([foundPokemon])
// })

app.get('/:verb/:adjective/:noun', (request,response) => {
    const {verb,adjective,noun} = request.params
    response.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})