const express = require("express");
const app = express();

require("dotenv").config();

const PORT= process.env.PORT


app.get("/", (req,res)=>{
    res.send("<h1>Welcome to Root Path<h1>")
})

app.get("/app", (req, res)=>{
    res.send("<h1>App Page</h1>")
})

app.get("/concat/:str1/:str2/:str3", (req,res)=>{
    const{str1,str2,str3} = req.params;
    res.send(`Congratulations on starting a new project called ${str1}-${str2}-${str3}`)
});

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
});

module.exports = app;