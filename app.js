const express = require("express");
const app = express();
// const rock = require("./models/rock");

// Routes
app.get("/", (request, response) => {
      console.log("Get request received to route: /");
      response.send("Welcome 99 Pokemon");
    });
    
    app.get("/:verb/:adjective/:noun", (request, response) => {
        const { verb, adjective, noun } = request.params
        response.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
    })
app.get("/bugs", (request, response) => {
  response.send("99 little bugs in the code");
});

app.get("/bugs/:numberOfBugs", (request, response) => {
  response.send(
    "Rock number " + request.params.index + " is: " + rock[request.params.index]
  );
});


module.exports = app;