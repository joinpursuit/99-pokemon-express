//DEPENDENCIES 
const express = require("express");


//CONFIGURATION
const app = express();

//ROUTES & CALLBACK

// New Project Name Generator
app.get("/:verb/:adjective/:noun", (request, response) => {
    console.log("GET request received to route: /:verb/:adjective/:noun")
    const { verb, adjective, noun } = request.params
    response.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})

//99 Little Bugs In the Code
const bugs = 99
app.get("/bugs", (request, response) => {
    console.log("GET request received to route: /bugs")
    response.send(`
        <p>${bugs} little bugs in the code</p>
        <a href="/bugs/${bugs+2}">pull one down, patch it around</a>
    `)
})

app.get("/bugs/:numberOfBugs", (request, response) => {
    console.log("GET request received to route: /bugs/:numberOfBugs")
    const { numberOfBugs } = request.params
    const sum = Number(numberOfBugs)+2
    if (numberOfBugs < 200) {
        response.send(`
        <p>${numberOfBugs} little bugs in the code</p>
        <a href="/bugs/${sum}">pull one down, patch it around</a>
        `)
    } else {
        response.send(`
        <p>${numberOfBugs} little bugs in the code</p>
        <a href="/bugs">Start Over</a>
        `)
    }
})

module.exports = app;