const express = require("express");
const app = express();

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}`
  );
});
app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params
  const sum = Number(numberOfBugs) + 2
  res.send(`<div><h1>${numberOfBugs} little bugs in the code</h1><a href="/bugs/${sum}">Pull one down, patch it around</a></div>`)
})
app.get("/bugs", (req, res) => {
  res.send(`<div><h1>99 little bugs in the code</h1><a href="/bugs/101">Pull one down, patch it around</a></div>`)
})


module.exports = app;
