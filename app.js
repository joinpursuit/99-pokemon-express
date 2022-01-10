const express = require("express");
const app = express();


app.get("/", (request, response) => {
    console.log("GET request received for / route");
    response.send("Welcome 99 Pokemon");
});

app.get("/bugs", (request, response) => {
    console.log("GET request received for /bugs route");
    response.send("<h1>99 little bugs in the code<h1/>" + `<a href='http://localhost:8888/bugs/101'>Pull one down, patch it around</a>`);
  });
  

module.exports = app; 