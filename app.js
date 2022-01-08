const express = require("express");
const res = require("express/lib/response");

const app = express();

const pokemon = require("./models/pokemon.json")

//root route
app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});
app.get("/:verb/:adjective/:noun", (req, res) => {
  console.log(req.params);
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}`
  );
});

app.get("/bugs", (req, res) => {
  res.send(
    `<h1>99 little bugs in the code</h1><a href="/bugs/101">pull one down, patch it around</a>`
  );
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  if (req.params.numberOfBugs >= 200) {
    res.send(`<a href="/bugs/">Too many bugs!! Start over!</a>`);
  } else {
    res.send(`${req.params.numberOfBugs} little bugs in the code
        <a href="/bugs/${Number(req.params.numberOfBugs) + 2}">Pull one down, patch it around</a>`);
  }
});

// app.get("/bugs/:numberOfBugs", (req, res) => {
//     console.log(req.params)
//     if(req.params.numberOfBugs < 200) {
//         res.send(`${req.params.numberOfBugs} little bugs in the code <a href="/bugs/${Number(req.params.numberOfBugs) + 2}">pull one down, patch it around</a>`)
//     } else {
//         res.send(`<a href="/bugs">Too many bugs!! Start over!</a>`)
//     }
// })

app.get("/pokemon", (req, res) => {
    res.send(pokemon)
    // let names = pokemon.map((p) => {
    //     return p.name
    // })
    // res.send(names)
    // console.log(names)
});


app.get("/pokemon/search", (req, res) => {
    const input = req.query.name
    let inputLowerCase = input.toLowerCase()
    console.log(inputLowerCase)
    for(let i = 0; i<=pokemon.length -1; i++) {
        if(inputLowerCase === pokemon[i].name.toLowerCase()) {
            res.send([pokemon[i]])
            //needs review
        } else {res.send([])}
    }
});

app.get("/pokemon/:indexOfArray", (req, res) => {
    const {indexOfArray} = req.params
    if(pokemon[indexOfArray]){
        res.send(pokemon[indexOfArray])
    } else {
        res.send(`Sorry, no pokemon found at ${indexOfArray}`)
    }
});


module.exports = app;
