const express = require("express");
const res = require("express/lib/response");
const app = express();
const pokemon = require("./models/pokemon.json");

app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb, adjective, noun } = req.params;

    res.send(
      `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
    );
  });

app.get("/", (req, res) => {
    
    res.send("Welcome 99 Pokemon");
});

app.get("/pokemon",(req,res)=>{
    res.send(pokemon)
})

app.get("/pokemon/search", (req,res)=>{
    let {name} = req.query
    res.send(pokemon.filter(element => element.name.toLowerCase() === name.toLowerCase()))
});

app.get("/pokemon/:indexOfArray",(req,res)=>{
    let {indexOfArray} = req.params

    if(pokemon[indexOfArray]){

        res.send(pokemon[indexOfArray])
    }else{

        res.send(`Sorry, no pokemon found at ${indexOfArray}`)
    }
});

app.get("/bugs",(req,res)=>{

    res.send("<h1>99 little bugs in the code</h1>")
})

app.get("/bugs/:numberofBugs",(req,res)=>{
   let {numberofBugs} = req.params;
  if(numberofBugs < 200){
      res.send( `<h2>${numberofBugs} little bugs in the code<h2>
      <a href=/bugs/${Number(numberofBugs) + 2}>Pull one down, patch it around.</a>`
      );
   } else res.send("Too many bugs!! Start over!")
})




  module.exports = app
