const express = require("express");
const app = express();

app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb, adjective, noun } = req.params;
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})

app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon")
})

app.get("/bugs", (req, res) => {
    res.send(`<h1>99 little bugs in the code<h1> <br> <a href="/bugs/101">pull one down, patch it around</a>`)
})



app.get("/bugs/:number_of_bugs", (req, res) => {
    const { number_of_bugs } = req.params;
    if(number_of_bugs < 200) {
        res.send(`${number_of_bugs} little bugs in the code <br> <a href="/bugs/${Number(number_of_bugs) + 2}">Pull one down, patch it around</a>`)
    } else {
        res.send(`Too many bugs!! Start over! <br> <a href="/bugs">next</a>`)
    }
})



module.exports = app;