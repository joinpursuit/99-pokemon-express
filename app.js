//DEPENDENCIES 
const express = require("express");


//CONFIGURATION
const app = express();

//ROUTES & CALLBACK
app.get("/", (request, response) => {
    console.log("GET request received to route: /")
    response.send("")
})

module.exports = app;