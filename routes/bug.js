
const express = require("express")
const bugRouter = express.Router()

bugRouter.get("/", (req, res) => {

    console.log("GET request received to /bugs")
    res.send(`
                <h1>99 little bugs in the code</h1> 
                <a 
                href="http://localhost:8888/bugs/101"> 
                pull one down, patch it around
                </a>`)
})

bugRouter.get("/:num", (req, res) => {
    const { num } = req.params;

    res.send(
      num < 200 ?  `
      <h1>${num} little bugs in the code </h1>
      <a href="/bugs/${Number(num) + 2}"> Pull one down, patch it around</a>`
     :  `
     <h1>${num} little bugs in the code</h1>
     <a href="/">Too many bugs!! Start over!</a>
    `)
  
  });


module.exports = bugRouter;