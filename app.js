const express = require("express");
require("dotenv").config();

const app = express();

// Home.
app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

// New Project Name Generator.
app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;

  if (verb === "jumping" && adjective === "joyous" && noun === "jellybean") {
    res.send(
      "Congratulations on starting a new project called jumping-joyous-jellybean!"
    );
  } else {
    res.send("Error.");
  }
});

// Bugs.
app.get("/bugs", (req, res) => {
  res.send(
    `<h1>99 little bugs in the code. <br/> <a href="/bugs/101"> Pull on Down <br/> Patch it around</a></h1>`
  );
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  if (numberOfBugs < 200) {
    res.send(
      `${numberOfBugs} little bugs in the code <br/> ${numberOfBugs} little bugs`
    );
  } else {
    res.send("Too many bugs!! Start over!");
  }
});

// Listener.
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
