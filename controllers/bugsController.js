const express = require("express") 
const bugs = express.Router()
let bugCount = 99
let prevCount = false

const validateUrl = (req, res, next) =>{ 
    const http = 'http://'
    const https = 'https://'
    let fullUrl = req.protocol + '://' + req.get('host') + req.url

    if (fullUrl.substring(0,7) === http || fullUrl.substring(0,8) === https){ 
        return next()
     }else { 
         res
            .status(400)
            .send(`You forgot to start your url with http:// or https://`)
      }
 }

 bugs.use(validateUrl)


 bugs.get("/", (req, res) => {
    bugCount = 99
    res.send(`${bugCount} little bugs in the code <a href="/bugs/101">pull one down, patch it around</a> `)
})

// bugs.get("/101", (req, res) => {
//     bugCount += 2
//     res.send(`${bugCount} little bugs in the code`)
//     bugCount = 99
// })


bugs.get("/:numberOfBugs", (req,res) => { 
    const { numberOfBugs }  = req.params

    // if (prevCount){ 
    //     bugCount += 2
    //     prevCount = false
    //  }else {
    //      bugCount += parseInt(numberOfBugs)
    //  }


    if (numberOfBugs<200) {
        res.send(`${numberOfBugs} little bugs in the code <a href="/bugs/${Number(numberOfBugs)+2}">Pull one down, patch it around</a> `)   
        // prevCount = true
    }else {
        // bugCount = 99
        res.send(`<a href="/bugs">Too many bugs!! Start over!</a>`)
    }
})


module.exports = bugs