const express = require("express");
const bugs = express.Router();

bugs.get("/", (req, res) => {
  let { numberOfBugs } = req.params;
  numberOfBugs = 101;
  res.send(`<h1>
  99 little bugs in the code 
  <br/> 
  99 little bugs 
  <br/> 
  <a href="/bugs/101">Pull one down, <br/> Patch it around</a>
  <br/>
  ${numberOfBugs} bugs in the code
  </h1>`);
});

bugs.get("/:numberOfBugs", (req, res) => {
  let { numberOfBugs } = req.params;
  if (numberOfBugs < 200) {
    res.send(`<h1>
        ${numberOfBugs} little bugs in the code
        <br/>
        ${numberOfBugs} little bugs
        <br/>
        <a href="/bugs/${
          Number(numberOfBugs) + 2
        }">Pull one down, patch it around</a>
        </h1>`);
  } else {
    res.send(`<h1><a href="/bugs">Too many bugs!! Start over!</a></h1>`);
  }
});

module.exports = bugs;
