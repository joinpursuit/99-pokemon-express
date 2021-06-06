const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});
app.get("/bugs", (req, res) => {
  let message = `<h1>99 little bugs in the code</h1>
 <a href='/bugs/101'> Pull One Down, Patch It Around</a>`;

  res.send(message);
  //  "<href>Pull One Down, Patch It Around</href>")

  //a link that says "pull one down, patch it around"
});
app.get("/bugs/:numberOfBugs", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  const { numberOfBugs } = req.params;
  let message = `${numberOfBugs} little bugs in the code <a href='/bugs/${
    Number(numberOfBugs) + 2
  }'>Pull one down, patch it around</a>`;
  if (numberOfBugs <= 199) {
    res.send(message);
  } else {
    res.send("Too many bugs!! Start over!");
  }
});

module.exports = app;
