//dependencies
const express = require("express");
const app = express();

//routes
app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon");
});

// ~new project name generator
app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb, adjective, noun } = req.params;
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`); 
});

//~bugs
app.get("/bugs", (req, res) => {
    res.send("<h1>99 little bugs in the code </h1> <a href='http://localhost:8888/bugs/101'>pull one down, patch it around</a>");
});

app.get("/bugs/:numberOfBugs", (req, res) => {
    const { numberOfBugs } = req.params;

    if( Number(numberOfBugs) >=  200 ) {
        res.send(`'<div>Too many bugs!! Start over!<h1><a href="http://localhost:8888/bugs/">pull one down</a></h1></div>'`);
        return;
    } else {
        res.send(`<h1>${numberOfBugs} little bugs in the code</h1><a href="http://localhost:8888/bugs/${Number(numberOfBugs)+2}">Pull one down, patch it around</a>`);
    }
});


module.exports = app;