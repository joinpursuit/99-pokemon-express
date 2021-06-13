// Dependencies
const express = require("express");

// Configuration
const app = express();
const bugs = require('./controllers/bugsController')
const pokemon = require('./controllers/pokemonController')


// Routes
app.use((req,res, next) =>{ 
    next()
 } )

app.get("/", (req, res) => { 
    res.status(200).send(`Welcome to Express`)
})


app.get("/jumping/joyous/jellybean", (req, res) => { 
res.send("Congratulations on starting a new project called jumping-joyous-jellybean!")
 })

 app.use("/bugs", bugs)

 app.use("/pokemon", pokemon)

 app.get("*", (req, res) => { 
    res.status(404).send("Page not found.")
 })
 // Export

 module.exports = app;