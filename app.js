const express = require("express");
require("dotenv").config();
const app = express();

// New Project Name Generator
app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

// 99 Little Bugs In the Code
app.get("/bugs", (req, res) => {
  res.send(`<h1>99 little bugs in the code</br>
99 little bugs</br>
<a href="./101">Pull one down, patch it around</a></br>
101 bugs in the code</h1>`);
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  const numberOfBugsPlusTwo = Number(numberOfBugs) + 2;
  if (numberOfBugs >= 200) {
    res.send('<h1><a href="./">Too many bugs!! Start over!</a></br></h1>');
  } else {
    res.send(
      `<h1><p>${numberOfBugs} little bugs in the code</br>
${numberOfBugs} little bugs</br>
<a href="./${numberOfBugsPlusTwo}">Pull one down, patch it around</a></br>
${numberOfBugsPlusTwo} bugs in the code</p></h1>`
    );
  }
});

module.exports = app;
