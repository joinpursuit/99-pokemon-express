const express = require("express");

const app = express();
const pokemon = require("./models/pokemon.json");
// console.log(pokemon[0]); 


app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon")
})


app.get("/:verb/:adjective/:noun", (req, res) => {
    const {verb, adjective, noun} = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})

app.get("/bugs", (req, res) => {
    res.send(
        `
        <p>99 little bugs in the code</p>
        <a href="http://localhost:8888/bugs/101">pull one down, patch it around</a>
        `)
})

app.get("/bugs/:numberOfBugs", (req, res) => {
    const {numberOfBugs} = req.params
    addedBugs = Number(numberOfBugs) + 2
    if(numberOfBugs < 200){
    res.send(`
        <p>${numberOfBugs} little bugs in the code</p>
        <a href="http://localhost:8888/bugs/${addedBugs}">Pull one down, patch it around</a>`
        )
    } else {
        res.send(`<a href="http://localhost:8888/bugs">Too many bugs!! Start over!</a>`)
    }
})

app.get("/pokemon/", (req, res) => {
    res.send(pokemon)
})


app.get("/pokemon/search/", (req, res) => {
    
    const {name} = req.query
    const findPokemon = pokemon.find((poke) =>{
        return poke.name.toLowerCase() === name.toLowerCase()
    })

    if(findPokemon) {
        res.send([findPokemon])
    } else {
        res.send([])
    }
})

app.get("/pokemon/:indexOfArray/", (req, res) => {
    const {indexOfArray} = req.params
    if(!pokemon[indexOfArray]){
        res.send(`Sorry, no pokemon found at ${indexOfArray}`)
    } else {
        res.send(pokemon[indexOfArray])
    }
})









// app.get("/rocks/:index", (req, res) => {
//     const index = req.params.index
//     if(rocks[index]){
//         console.log(index, "this is the index")
//         res.send(rocks[index])
//     } else {
//         res.send("sorry, no rocks there my friend")
//     }
// })


// app.get("/hello/:firstName/:lastName", (req, res) => {
//     console.log(req.params)
//     const {firstName, lastName} = req.params
//     res.send(`Hello ${firstName} ${lastName}!`)
// })

// app.get("/calculator/:operator", (req, res) => {
//     console.log(req.params, "this is the param")
//     console.log(req.query, "this is our query string")
//     const {num1, num2} = req.query
//     const sum = Number(num1) + Number(num2)
//     res.send("total = " + sum )
// })

module.exports = app;