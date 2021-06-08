// Dependencies
const express = require("express")

// Configuration
const app = express()

// Routes 
app.get("/jumping/joyous/jellybean", (req, res) => {
    res.send("Congratulations on starting a new project called jumping-joyous-jellybean!")
})

// Export 
module.exports = app;