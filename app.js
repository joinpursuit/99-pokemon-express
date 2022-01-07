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
app.get("/bugs", (request, response) => {
    console.log("GET request received to route: /bugs")
    response.send("99 little bugs in the code")
})

module.exports = app;