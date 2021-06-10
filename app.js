const express = require("express")
const app = express()


app.get("/bugs", (req, res) => {
    res.send("99 little bugs in the code")
})

app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon")
})

app.get("/bugs", (req, res) => {
    res.send(`<h1>99 little bugs in the code </h1> <a href="/bugs/101">pull one down, patch it around</a>`)
})

app.get("/bugs/:numberOfBugs", (req, res) => {
    const { numberOfBugs } = req.params
    if (numberOfBugs >= 200) {
        res.send(`<a href="/bugs">Too many bugs!! Start over!</a>`)
    } else {
        res.send(`
        <h1> ${numberOfBugs} little bugs in the code </h1>
        <a href="/bugs/${Number(numberOfBugs) + 2}">Pull one down, patch it around</a>`)
    }

})
app.get("/:verb/:adj/:noun", (req, res) => {
    const { verb, adj, noun } = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adj}-${noun}`)
})

const pokemon = require("./models/pokemon.json")
console.log(pokemon[0])

app.get("/pokemon", (req, res) => {
    res.json(pokemon)
})
app.get("/pokemon/search",(req,res)=>{
    const{name}=req.query
    
    const result =pokemon.filter(poke=>poke.name.toLowerCase() ===name.toLowerCase())
    res.send(result)
})

app.get("/pokemon/:index", (req, res) => {
    const { index } = req.params
    if (pokemon[index]) {
        res.status(200).send(pokemon[index])
    } else {
        res.send(`Sorry, no pokemon found at ${index}`)
    }

})


module.exports = app