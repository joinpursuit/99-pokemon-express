//dependencies
const express = require("express");
const app = express();

//routes
app.get("/", (req, res) => {
    res.send("<h1> Server is seding response </h1>");
});

//export 
module.exports = app;