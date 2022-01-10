const express = require("express");
const app = express();

app.get('/bugs', (request,response) => {
    response.send('99 little bugs in the code')
})
module.exports= app;