const express = require("express");
const app = express();

app.get("/", (request, response) => {
    console.log("GET request received to route:  /");
    response.send("Welcome 99 Pokemon");
  });


module.exports = app;