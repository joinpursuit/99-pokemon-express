//dependencies

const express = require("express");

//config

const app = express();

//routes

app.get("/bugs", (req, res) => {
  res.send(
    `<div>
      <h3>99 little bugs in the code</h3>
      <a href='/bugs/101'>pull one down, patch it around</a>
    </div>`
  );
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  res.send(
    `<div>
    ${numberOfBugs} little bugs in the code  
     <a href='/bugs/${
       Number(numberOfBugs) + 2
     }'>pull one down, patch it around</a></div>`
  );
});

//exports

module.exports = app;
