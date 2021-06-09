const express = require('express')

const app = express()

app.get('/:verb/:adjective/:noun', (req, res) => {
	const { verb, adjective, noun } = req.params
	res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}`)
})

app.get('/bugs', (req, res) => {
	res.send(`<h1>99 little bugs in the code</h1> 
  <strong>99 little bugs</strong><br>
  <a href=/bugs/101>Pull one down, Patch it around</a>`)
})

app.get('/bugs/:numberOfBugs', (req, res) => {
	const { numberOfBugs } = req.params
	if (numberOfBugs < 200) {
		res.send(`<h3>${numberOfBugs} little bugs in the code</h3>
    <strong>${numberOfBugs} little bugs</strong><br>
    <a href='/bugs/${Number(numberOfBugs) + 2}'>Pull one down, patch it around</a>`)
	} else {
    res.send(`Too many bugs!! Start over!' <a href='/bugs/'>Start over</a>`)
  }
})

//export
module.exports = app
