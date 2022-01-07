const express = require("express");
const app = express();
const bug = require("./bug");

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  res.send(
    `Congratulations on starting a new project called ${req.params.verb}-${req.params.adjective}-${req.params.noun}!`
  );
});

app.get("/bugs", (req, res) => {
  console.log("Get request received to route: /bugs");
  // res.send(bug[0])
  res.send(`${bug[0]}`);
});

app.get("/bugs/:numberOfBugs", (request, response) => {
  const { numberOfBugs } = request.params;
  const numOfBugs = Number(numberOfBugs);

  response.send(`<p>${numOfBugs} little bugs in the code</p>
    <a href="${numOfBugs < 200 ? numOfBugs + 2 : "/"}">${
    numOfBugs < 200
      ? `${bug[2]}`
      : `${bug[4]}`
  }</a>`);
});


module.exports = app;
