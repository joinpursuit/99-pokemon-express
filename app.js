const express = require("express")
const app = express()

// New Project Name Generator
app.get("/:verb/:adjective/:noun", (request, response) => {
    const { verb, adjective, noun } = request.params
    response.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})

// 99 Little Bugs In The Code
app.get("/bugs", (request, response) => {
    response.send("99 little bugs in the code<br/>99 little bugs<br/><a href='/bugs/101'>pull one down,<br/>patch it around</a>")
})

app.get("/bugs/:numberOfBugs", (request, response) => {
    const { numberOfBugs } = request.params
    response.send(`${numberOfBugs} little bugs in the code<br/><a href="/bugs/${Number(numberOfBugs)+Number(2)}">pull one down,<br/>patch it around</a>`)
})

module.exports = app