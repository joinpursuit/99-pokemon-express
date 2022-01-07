const express = require("express");
const app = express();

app.get("/", (request, response) => {
    console.log("GET request received to route:  /");
    response.send("Welcome 99 Pokemon");
  });


  //Route that takes 3 parameters in the URL
app.get("/:verb/:adjective/:noun", (request, response) => {
    const {verb, adjective, noun} = request.params
    console.log(verb)
    console.log("GET request received to route:  /verb/:adjective/:noun");
     response.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}`);
  });

//Route that takes 3 parameters in the URL
app.get("/bugs", (request, response) => {
    console.log("GET request received to route:  /bugs");
     response.send("99 little bugs in the code");
  });


module.exports = app;