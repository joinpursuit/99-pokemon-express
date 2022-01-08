// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();

// ROUTES
// app.get("/", (req, res) => {

// })

// NEW PROJECT NAME GENERATOR
app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = request.params
  res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})

// 