const express = require("express")
const bugRouter = require("./routes/bug")
const app = express()
const pokemonRouter = require("./routes/pokemon")
const wordRouter = require("./routes/word")

app.get("/", (req, res) => {
    console.log("Home")
    res.send("Welcome 99 Pokemon")
})

app.use("/", wordRouter)
app.use("/bugs", bugRouter)
app.use("/pokemon", pokemonRouter)




module.exports = app