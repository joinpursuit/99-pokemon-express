const express = require("express")
const app = express()
module.exports = app


app.get("/", (req, res) => {
    res.send('Welcome to the Express Lab')
})

// Exercise 1
app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb, adjective, noun } = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}`)
})

// Exercise 2
app.get("/bugs", (req, res) => {
    res.send(`
    <p>99 little bugs in the code</p>
    <a href="/bugs/101">pull one down, patch it around</a>
    `)
})
app.get("/bugs/:numberOfBugs", (req, res) => {
    const { numberOfBugs } = req.params
    console.log(`req.params: ${numberOfBugs}`)
    const bugSum = Number(numberOfBugs) + 2
    if (numberOfBugs > 200) {
        res.send(`
        <a href="/bugs">Start Over</a>
        `)
    } else {
        res.send(`
        <p>${numberOfBugs} little bugs in the code</p>
        <a href=${bugSum}>pull one down, pass it around</a>
        `)
    }
})

// Exercise 3
