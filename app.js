const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json");

require("dotenv").config();

const PORT= process.env.PORT


app.get("/", (req,res)=>{
    res.send("Welcome 99 Pokemon")
});

app.get("/bugs", (req, res)=>{
    res.send("99 little bugs in the code")
});

app.get("/pokemon", (req, res)=>{
    res.send(pokemon)
});

app.get("/pokemon/search", (req, res)=>{
    const {name} = req.query
    let findName= pokemon.filter((pokemon)=>{
        return pokemon.name.toUpperCase() === name.toUpperCase()
    })
        res.send(findName)
})

app.get("/pokemon/:indexOfArray", (req, res)=>{
    const {indexOfArray} = req.params 
    if(!pokemon[indexOfArray]){
        res.send(`Sorry, no pokemon found at ${indexOfArray}`)
    } else {
        res.send(pokemon[indexOfArray]);
    }
});

app.get("/bugs/:numberOfBugs", (req,res)=>{
    const {numberOfBugs} = req.params;
    const twoPlus = Number(numberOfBugs) + 2
    if(numberOfBugs >= 200){
        res.send("Too many bugs!! Start over!")
    } else {
        // res.send(`${numberOfBugs} little bugs in the code. pull one down, patch it around.`)
        res.send(`${numberOfBugs} little bugs in the code <a href=/bugs/${twoPlus}>Pull one down, patch it around.</a>`)
    }
})

app.get("/app", (req, res)=>{
    res.send("<h1>App Page</h1>")
})

app.get("/:str1/:str2/:str3", (req,res)=>{
    const{str1,str2,str3} = req.params;
    res.send(`Congratulations on starting a new project called ${str1}-${str2}-${str3}!`)
});

app.listen(PORT, ()=>{
    console.log("Welcome 99 Pokemon")
});

module.exports = app;