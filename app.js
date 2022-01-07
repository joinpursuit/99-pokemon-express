const express = require("express")

const app = express()

app.get("/:verb/:adjective/:noun", (req, res) => {

    console.log("GET request received to /:verb/:adjective/:noun route")
    const {verb, adjective, noun} = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})



app.get("/bugs", (req, res) => {

    console.log("GET request received to /bugs")
    res.send(`
                <h1>99 little bugs in the code</h1> 
                <a 
                href="http://localhost:8888/bugs/101"> 
                pull one down, patch it around
                </a>`)
})

app.get("/bugs/:numberOfBugs", (req, res) => {

    console.log("GET request received to /bugs/:numberOfBugs")
    const {numberOfBugs} = req.params

    res.send(`
                <h1>${numberOfBugs} little bugs in the code</h1> 
            ? Too many bugs!! Start over! : <a 
                href="${Number(numberOfBugs)} > 200 ? / : numberOfBugs"> 
                 pull one down, patch it around
                </a>`
                
                )
})





app.get("/", (req, res) => {
    console.log("Home")
    res.send("Welcome 99 Pokemon")
})


module.exports = app