// DEPENDENCIES
const express = require("express");

//CONFIGURATION
const app = express();

// ROUTES
app.get("/:verb/:adjective/:noun", (req,res)=> {
    let {verb, adjective, noun} = req.params;
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`);
})

// EXPORT
module.exports = app;