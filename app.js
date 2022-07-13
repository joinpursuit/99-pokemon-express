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
  res.send("99 little bugs in the code.");
});

// Listener.
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
