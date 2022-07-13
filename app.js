const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.listen(PORT);

module.exports = app;
