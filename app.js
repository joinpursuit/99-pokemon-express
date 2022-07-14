const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon")
});

app.get("/bugs", (req, res) => {
    res.send("<h1>99 little bugs in the code</h1><a href='/bugs/101'>pull one down, patch it around</a>")
});

app.get("/bugs/:numberOfBugs", (req, res) => {
    // console.log(req.params)
    const { numberOfBugs } = req.params;
    // const newNum = num + 2;
    const bugNum = Number(numberOfBugs)
    if ( bugNum < 200) {
        res.send(`${bugNum} little bugs in the code`)
    } else {
        res.send("<a href='/'>Too many bugs!! Start over!</a>")
    }
});





module.exports = app;