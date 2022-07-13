const express = require("express");
const app = express();

const pokemon = require("./models/pokemon.json");
console.log(pokemon[0]);

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});
app.get("/bugs", (req, res) => {
  res.send(
    `
    <h1>99 little bugs in the code</h1>
    <a href="/bugs/101">pull one down, patch it around</a>`
  );
});
app.get("/bugs/:numberOfBugs", (req, res) => {
  let { numberOfBugs } = req.params;
  let bugs = Number(numberOfBugs);
  if (bugs < 200) {
    res.send(`
    <h1>${bugs} little bugs in the code</h1>
    <a href="/bugs/${(bugs += 2)}">Pull one down, patch it around</a>
    `);
  } else {
    res.send(`
    <h1>${bugs} little bugs in the code</h1>
    <a href=/bugs>Too many bugs!! Start over!</a>
    `);
  }
  res.send();
});
app.get("/jumping/:joyous/:jellybean", (req, res) => {
  const { joyous, jellybean } = req.params;

  res.send("New project made");
});

module.exports = app;

// app.listen(8888, () => {
//   console.log("Listening");
// });
