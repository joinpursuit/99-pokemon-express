const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json");
console.log(pokemon[0]);

app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon")
})

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}`
  );
});

app.get("/bugs", (req, res) => {
   res.send(`<!DOCTYPE html>
   <html>
   <h1>99 little bugs in the code</h1>
   <a href="/bugs/number_of_bugs">pull one down, patch it around</a>
   </html>`)
});

app.get("/bugs/:number_of_bugs", (req, res) => {
    const {number_of_bugs} = req.params
    if(number_of_bugs >= 200) {
        res.send(`<!DOCTYPE html>
        <html>
        <a href="/bugs">Too many bugs!! Start over!</a>
        </html>`)
    } else {
        res.send(`<!DOCTYPE html>
        <html>
        <h1> ${number_of_bugs} little bugs in the code</h1>
        <a href="/bugs/${Number(number_of_bugs) + 2}">Pull one down, patch it around</a>
        </html>`)
    }
})



module.exports = app;
