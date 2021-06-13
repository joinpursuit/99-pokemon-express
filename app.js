const express = require('express')
const app = express()

app.get('/:verb/:adjective/:noun', (req, res) => {
    // res.send('Congratulations on starting a new project called jumping-joyous-jellybean!')
    // res.send(req.params)
    const { verb, adjective, noun } = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})
app.get('/bugs/', (req, res) => {
    const bugs = '99 little bugs in the code'
    const patch = 'pull one down, patch it around'
    res.set('Content-Type', 'text/html')
    res.send(Buffer.from(`${bugs}\n${patch}`))
})


module.exports = app


