// Dependencies
const express = require('express');

// Configuration
const app = express();

// Routes
app.get("/", (req, res)=>{
    res.send("<h1>Hello</h1>");
});

// Export
module.exports = app;