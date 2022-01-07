const express = require("express")
const app = express()

// New Project Name Generator
app.get("/:verb/:adjective/:noun", (request, response) => {
    response.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})

module.exports = app