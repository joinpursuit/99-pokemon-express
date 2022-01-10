const express = require("express");
const app = express();


app.get("/", (request, response) => {
    console.log("GET request received for ("/") route");
    response.send("Welcome to 99 Pokemon");
});


module.exports = app; 