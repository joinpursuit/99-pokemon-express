const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}`
  );
});

app.get("/bugs", (req, res) => {
  res.send("<h1>99 little bugs in the code</h1>");
});

app.get("/bugs/:number_of_bugs", (req, res) => {
  const { number_of_bugs } = req.params;
  if (number_of_bugs >= 200) {
    res.send("Too many bugs!! Start over!");
  } else {
    res.send(
      ` <h1>${number_of_bugs} little bugs in the code</h1>
      <a href="/bugs/${parseInt(number_of_bugs) + 2}">Pull one down, patch it around</a>`
    );
  }
});

// /href.*201.*Pull one down\, patch it around/

module.exports = app;
