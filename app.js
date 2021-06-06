const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon");
  });

app.get("/bugs/:id", (req, res) =>{
    const{id} = req.params;
    let bugPull = id ++;
    res.send(`${id} little bugs in the code <a href=/bugs/${Number(id)}${bugPull}></a>` )
})

app.get("/bugs", (req,res) => {
   res.send(` <h1>99 little bugs in the code</h1> <a href=/bugs/101>pull one down, patch it around</a>`)
});



  app.get("/:verb/:adjective/:noun", (req, res) => {
    const {verb, adjective, noun} = req.params;
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}`);
    
  });

  module.exports = app;
