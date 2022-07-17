const express = require("express")
const app = express()


app.get("/", (req,res) => {
    res.send("Welcome 99 Pokemon")
})
app.get("/bugs", (req,res) => {
    res.send ("<h1>99 little bugs in the code</h1><a href='/bugs/101'>pull one down, patch it around</a>")
})
app.get("/bugs/:numberOfBugs", (req,res) => {
    const {numberOfBugs} = req.params
    if(Number(numberOfBugs)>= 200){
    res.send("99 little bugs in the code ${numberOfBugs} little bugs in the code<a href='/bugs'>Too many bugs!! Start over!</a>" )
    } else {
        res.send(
          `99 little bugs in the code${numberOfBugs} little bugs in the code<a href='/bugs/${
            Number(numberOfBugs) + 2
          }'>Pull one down\, patch it around</a>`
        );
      }
    });

app.get("/:verb/:adjective/:noun", (req, res) => {
    console.log(req.params);
    const {verb , adjective, noun} = req.params;
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})

module.exports = app