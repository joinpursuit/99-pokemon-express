const express = require("express");
const { download } = require("express/lib/response");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;

  if (parseInt(numberOfBugs) >= 200) {
    res.send(`<a href="/">Too many bugs!! Start over!</a>`);
  } else {
    res.send(
      `<a href="/bugs/${
        parseInt(numberOfBugs) + 2
      }">${numberOfBugs} little bugs in the code Pull one down, patch it around</a>`
    );
  }
});

app.get("/bugs", (req, res) => {
  res.send(
    `<h1>99 little bugs in the code</h1><a href="/bugs/101">pull one down, patch it around</a>`
  );
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.listen(PORT);

module.exports = app;
