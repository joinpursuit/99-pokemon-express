const express = require("express")
const app = express();

//New Project Name Generator
app.get("/:verb/:adjective/:noun", (req, res) =>{
    const {verb, adjective, noun} = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}`)
})

//99 Little Bugs In the Code
app.get("/bugs/101", (req, res) => {
    res.send("101 bugs in the code")
})

app.get("/bugs/:number_of_bugs", (req,res) =>{
    const {number_of_bugs} = req.params
    if (number_of_bugs < 200){

        res.send(`${number_of_bugs} little bugs in the code
                    <a href="/bugs/${Number(number_of_bugs) + Number(2)}"> Pull one down, patch it around </a>`)
    }else {
        res.send(`  <a href="/bugs">Too many bugs!! Start over!</a>`)
    }

})

app.get("/bugs", (req, res) =>{
    res.send(`<h1>99 little bugs in the code </h1>
              <a href="/bugs/101"> pull one down </a>  `)
})





module.exports = app;