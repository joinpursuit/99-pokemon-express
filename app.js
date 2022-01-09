const express = require("express");
const app = express()

const pokemon = require("./models/pokemon.json")

app.get("/", (req,res)=>{
    res.send("Welcome 99 Pokemon")
})

app.get("/bugs", (req,res)=>{
    res.send(
        `<div>
         <h1>99 little bugs in the code</h1>
         99 little bugs
         <a href="/bugs/101">Pull one down,Patch it around</a>
         </div>`
        );
});

app.get("/pokemon", (req, res)=>{
    res.send(pokemon)
})

app.get("/pokemon/search", (req,res)=>{
    const { name } = req.query
    if(pokemon.name === name){
        res.send(pokemon)
        return;
    }
    res.send([])

})

app.get("/pokemon/:index", (req, res)=>{
    let { index } = req.params
    if (pokemon[index]){
        res.send(pokemon[index])
    }else{
        res.send(`Sorry, no pokemon found at ${index}`)
    }
})




app.get("/bugs/:numberOfBugs", (req, res)=>{
    const { numberOfBugs} = req.params
    if (numberOfBugs >= 200){
        res.send(`Too many bugs!! Start over!! <a href='/'Start over!!</a>`)
    }else{
        res.send(`
        <div>
        ${Number(numberOfBugs)} little bugs in the code
        <a href='/bugs/${Number(numberOfBugs) + 2}'>Pull one down, patch it around</a>
        </div>
        `
        
        )
    }
})



app.get("/:verb/:adjective/:noun", (req,res)=>{
    const { verb, adjective, noun } = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})


module.exports = app