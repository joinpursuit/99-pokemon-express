const express = require("express")

const app = express()

app.get('/', (req, res) =>{
    console.log("Get /")
    res.send("Welcome 99 Pokemon")
})

app.get('/bugs', (req, res) =>{
    console.log("Get /")
    res.send("99 little bugs in the code")
})

app.get('/bugs/:numberOfBugs', (req, res) =>{
    console.log("Get /")
    res.send("99 little bugs in the code")
})

app.get('/:verb/:adjective/:noun', (req, res) => {
    console.log("Get /:verb/:adjective/:noun")
    const { verb, adjective, noun} = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})

module.exports = app;