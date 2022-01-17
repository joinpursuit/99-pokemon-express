//dependecies 
const express = require("express");
const pokemon = require("./models/pokemon.json");
// console.log(pokemon[0]);


//configuration 
const app = express();

//routes 
app.get("/:verb/:adjective/:noun", (req, res) => {
    let { verb, adjective, noun } = req.params;
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`);
  });

 app.get("/", (req,res)=>{
     res.send("Welcome 99 Pokemon");
 });

 app.get("/bugs",(req,res)=>{
     res.send(`<h1>99 little bugs in the code</h1>
     <a href="http://localhost8888/bugs/101">pull one down, patch it around</a>`
     );
 })

 app.get("/bugs/:numberOfBugs",(req,res)=>{
     let { numberOfBugs } = req.params;
     if( numberOfBugs >=200){
        // res.send(`<a href="http://localhost:8888/bugs">Too many bugs!! Start over!</a>`)
        res.send("Too many bugs!! Start over!")
    }else{
        res.send(`${numberOfBugs} little bugs in the code
            <a href="http://localhost:8888/bugs/${Number(numberOfBugs)+2}">Pull one down, patch it around</a>`
        )}
 });


app.get("/pokemon",(req,res)=>{
    res.send(pokemon);
})

app.get("/pokemon/search",(req,res)=>{
    let { name } = req.query;
    // console.log(name);
    let searchedPoke = pokemon.find(poke=>poke.name.toLowerCase() === name.toLowerCase());
    if(!searchedPoke){
        res.send([])
    }else{
        res.send([searchedPoke])
    }
})

app.get("/pokemon/:indexOfArray",(req,res)=>{
    let { indexOfArray } = req.params;
    if(pokemon[indexOfArray]){
        res.send(pokemon[indexOfArray])
    }else{
        res.send(`Sorry, no pokemon found at ${indexOfArray}`)
    }
});




// EXPORT
module.exports = app;