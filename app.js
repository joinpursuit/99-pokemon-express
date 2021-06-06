const express = require("express")
const app = express();

//New Project Name Generator
app.get("/:verb/:adjective/:noun", (req, res) =>{
    const {verb, adjective, noun} = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}`)
})

//99 Little Bugs In the Code
app.get("/bugs", (req, res) => {
    res.send(`99 little bugs in the code
    <a href="">pull one down, patch it around</a>`)
})
module.exports = app;