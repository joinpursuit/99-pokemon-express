const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json")
console.log(pokemon.length)

app.get('/bugs', (request,response) => {
    response.send(
    `<h1>99 little bugs in the code </h1>   
    <a href='/bugs/101'>Pull one down, patch it down</a>`   
)
})
module.exports= app;


app.get('/bugs/:numberOfBugs', (request,response) => {
    const {numberOfBugs} = request.params;
    const amountOfBugs = Number(numberOfBugs) + 2;

    if (numberOfBugs < 200) {
        response.send(
        `<h1> ${numberOfBugs} little bugs in the code </h1>
        <a href='/bugs/${amountOfBugs}'>Pull one down, patch it down</a>
        `
        )
    } else {
        response.send(
            `<h1> ${numberOfBugs} little bugs in the code </h1>
            <a href='/bugs'>Start Over </a>
            `
        )
    } 
})

app.get('/pokemon',(request,response) => {
    response.send(pokemon)
})

app.get('/pokemon/:indexOfArray', (request,response) => {
    const {indexOfArray} = request.params;
    if (indexOfArray > 151) {
        response.send(`Sorry, no pokemon found at /pokemon/${indexOfArray}`)
    }
    response.send(
        pokemon[indexOfArray]
    )
})