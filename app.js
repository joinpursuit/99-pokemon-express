const express = require("express");
const app = express();

require("dotenv").config();

const PORT= process.env.PORT


app.get("/", (req,res)=>{
    res.send("Welcome 99 Pokemon")
})

app.get("/bugs", (req, res)=>{
    res.send("99 little bugs in the code")
})
app.get("/bugs/:numberOfBugs", (req,res)=>{
    const {numberOfBugs} = req.params;
    const twoPlus = numberOfBugs + 2
    if(numberOfBugs >= 200){
        res.send("Too many bugs!! Start over!")
    } else {
        res.send(`${numberOfBugs} little bugs in the code. pull one down, patch it around.`)
    }
    
})

app.get("/app", (req, res)=>{
    res.send("<h1>App Page</h1>")
})

app.get("/:str1/:str2/:str3", (req,res)=>{
    const{str1,str2,str3} = req.params;
    res.send(`Congratulations on starting a new project called ${str1}-${str2}-${str3}!`)
});

app.listen(PORT, ()=>{
    console.log("Welcome 99 Pokemon")
});

module.exports = app;