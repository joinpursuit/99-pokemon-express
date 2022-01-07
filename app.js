import express from "express"

const app = express()

app.get('/:verb/:adjective/:noun', (req, res) => {
    console.log("Get /:verb/:adjective/:noun")
    const { verb, adjective, noun} = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})

export default app