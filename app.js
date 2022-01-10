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
  
  app.get("/bugs/:numberOfBugs", (request, response) => {
    let { numberOfBugs } = request.params;
    if (numberOfBugs < 200) {
        let plusTwo = Number(numberOfBugs) + 2;
        response.send(`${numberOfBugs} little bugs in the code <a href="http://localhost:8888/bugs/${plusTwo}">Pull one down, patch it around</a>`);
    } else {
        response.send(`<a href="http://localhost:8888/bugs/">Too many bugs!! Start over!</a>`);
    }
})

module.exports = app; 