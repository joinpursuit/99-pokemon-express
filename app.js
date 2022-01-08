const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon");
})

app.get("/:verb/:adjective/:noun", (req, res)=> {
    const {verb, adjective, noun} = req.params;
    res.send("Congratulations on starting a new project called " + verb + "-" + adjective + "-" + noun)
})

app.get("/bugs", (req, res)=> {
    res.send(`<h1>99 little bugs in the code.</h1>
    <a href="http://localhost:8888/bugs/"101>pull one down, patch it around</a>")`
    );
})

app.get("/bugs/:numberOfBugs",(req, res)=> {
    const { numberOfBugs } = req.params;
    
        res.send(`<h1>${numberOfBugs} little bugs in the code</h1>
        <a href="http://localhost:8888/bugs/"${numberOfBugs}>pull one down, patch it around</a>")`
        );
    
})

module.exports = app;