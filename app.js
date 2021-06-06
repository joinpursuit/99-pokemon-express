const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon");
});
app.get("/bugs", (req, res) => {
    res.send("<h1>99 little bugs in the code</h1>");
});
app.get("/bugs/:number_of_bugs", (req, res) => {
    console.log(req.params)
    console.log(req.query)
    const {number_of_bugs} = req.params
    res.send(number_of_bugs + " little bugs in the code")
});


module.exports = app;