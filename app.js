const express = require("express")
const app = express()
const pokemon = require("./models/pokemon.json")
// console.log(pokemon[0])


app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb, adjective, noun} = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}`)
})

app.get("/", (req, res)=>{
    res.send("Welcome 99 Pokemon")
})

app.get("/bugs", (req, res)=>{
    res.send(
       ` <h1>99 little bugs in the code</h1>
        <a href ="/bugs/101">pull one down, patch it around</a>`
)
})

app.get("/bugs/:numberOfBugs", (req, res) =>{
    const { numberOfBugs} = req.params
    if(numberOfBugs<200) {
    res.send(`${numberOfBugs} little bugs in the code
    <a href ="/bugs/${Number(numberOfBugs) + Number(2)}">Pull one down, patch it around</a>`)
} else {
    res.send(`<a href="/">Too many bugs!! Start over!</a>`)
}
})

app.get("/pokemon", (req, res) =>{
    console.log()
    //const pokemon = 
    // res.json({})
})










module.exports = app