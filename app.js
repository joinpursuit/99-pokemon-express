//dependecies
//
const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json");

app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon");
  });

app.get("/:verb/:adjective/:noun", (req,res) => {
    const {verb, adjective, noun} = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}`)
})

app.get("/bugs", (req,res) => {
    res.send(`<h1>99 little bugs in the code</h1>

    <a href= "/bugs/101">pull one down, patch it around</a>`)

})


 app.get("/bugs/:numberOfBugs", (req,res) => {
const {numberOfBugs} = req.params;
if(numberOfBugs>=200) {
    res.send(`<a href="/bugs/">Too many bugs!! Start over!</a>`)
} else {
    res.send(`
    ${numberOfBugs} little bugs in the code
    <a href="/bugs/${Number(numberOfBugs) + 2}">Pull one down, patch it around</a>`)
}
})

app.get("/pokemon", (req,res) => {
res.send(pokemon)
})




app.get("/pokemon/search" , (req,res) => {
    const {name} = req.query
    const caseIgnored = name.toLowerCase()
    for(let i = 0; i < pokemon.length; i++){
        if(caseIgnored === pokemon[i].name.toLowerCase()) {
            res.send([pokemon[i]]);
        } else {
            res.send([])
        }
    }

})



// app.get("/pokemon/search", (req, res) => {
//     const { name } = req.query
//     const poke = pokemon.find(elem => elem.name.toLowerCase() === name.toLowerCase())
//     if (!poke) {
//         res.send([])
//     } else {
//         res.send([poke])
//     }
// })  

app.get("/pokemon/:indexOfArray" , (req,res) => {
    const {indexOfArray} = req.params;
    if(pokemon[indexOfArray]) {
        res.send(pokemon[indexOfArray]) 
    } else {
      res.send(`Sorry, no pokemon found at ${indexOfArray}`)  
    }
})





 module.exports = app

