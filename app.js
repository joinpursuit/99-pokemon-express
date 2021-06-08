const express = require("express")
const app = express()

app.get("/:verb/:adj/:noun",(req, res)=>{
    const {verb, adj, noun} = req.params

    console.log(req.params)

    res.send(`Congratulations on starting a new project called ${verb}-${adj}-${noun}!`)

})


module.exports = app;
