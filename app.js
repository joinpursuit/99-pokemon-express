//dependencies
const express = require("express");
const app = express();

//routes
app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon");
});

//~new project name generator
app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb, adjective, noun } = req.params;
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`);
});

//~99 little bugs 
app.get("/bugs", (req, res) => {
    res.send("<h1>99 little bugs in the code</h1>");
});

app.get("/bugs/:numberOfBugs", (req, res) => {
    
})

//export 
module.exports = app;