const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send(`greetings`);
});
app.get("/:verb/:adjective/:noun", (request, response) => {
  console.log(request.params);
  const { verb, adjective, noun } = request.params;
  response.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun} `);
});

module.exports = app;
