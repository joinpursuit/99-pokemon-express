const express = require("express");
const app = express();

app.get("/:adjective/:verb/:noun", (req, res) => {
    const { adjective, verb, noun} = req.params
  res.send(`Congratulations on starting a new project called ${adjective}-${verb}-${noun}!`);
});

module.exports = app