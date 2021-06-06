const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`Welcome 99 Pokemon`);
});

app.get("/bugs", (req, res) => {
  res.send(`<h1>99 little bugs in the code</h1>
    <a href="/bugs/101">Pull one down, patch it around</a>`);
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}`
  );
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  if (Number(numberOfBugs) === 101) {
    res.send(
      `<a href="/bugs/${
        Number(numberOfBugs) + Number(2)
      }">Pull one down, patch it around</a>`
    );
  } else if (Number(numberOfBugs) < 200 && Number(numberOfBugs) !== 101) {
    res.send(`<h1>${Number(numberOfBugs)} little bugs in the code</h1>
        <a href="/bugs/${
          Number(numberOfBugs) + Number(2)
        }">Pull one down, patch it around</a>`);
  } else if (Number(numberOfBugs) > 200) {
    res.status(404).send(`<a href="/bugs">Too many bugs!! Start over!</a>`);
  }
});

module.exports = app;

{
  /* <a href="bugs/${
    Number(numberOfBugs) + Number(2)
  }">Pull one down, patch it around</a>  */
}
