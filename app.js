const express = require("express")
const app = express()

// New Project Name Generator
app.get("/:verb/:adjective/:noun", (request, response) => {
    const { verb, adjective, noun } = request.params
    response.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})

// 99 Little Bugs In The Code

module.exports = app