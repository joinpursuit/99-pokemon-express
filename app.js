// Dependencies
const express = require('express');

// Configuration
const app = express();

// Routes
app.get("/", (req, res)=>{
    res.send("Welcome 99 Pokemon");
});

app.get("/:verb/:adjective/:noun", (req, res)=>{
    let { verb, adjective, noun } = req.params;
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`);
});

// Export
module.exports = app;