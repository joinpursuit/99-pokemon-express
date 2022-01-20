// DEPENDENCIES
const express = require("express");
const pokemon = require(".models/pokemon.json")

require("dotenv").config();

// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (require, response) => {
    response.send("Here is the Homepage")
})

app.get("/:verb/:adjective/:noun", (require, response) => {
    response.send(`Congratulations on starting a new project called ${require.params.verb}-${require.params.adjective}-${require.params.noun}`);
})


app.get("/bugs", (require, response) => {
    response.send("99 little bugs in the code");
})

//wildcard-extract variables...see 

// app.get("/bugs/101", (require, response) => {
    
// })


const PORT = process.env.PORT;

app.listen(PORT, ()=> {
console.log("Listening to port ${PORT}");
})