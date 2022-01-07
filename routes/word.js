
const express = require("express")
const wordRouter = express.Router()


wordRouter.get("/:verb/:adjective/:noun", (req, res) => {
    console.log("GET request received to /:verb/:adjective/:noun route")
    const {verb, adjective, noun} = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})

module.exports = wordRouter;