const express = require("express");
const app = express();

app.get('/bugs', (request,response) => {
    response.send(
    `<h1>99 little bugs in the code </h1>   
    <a href='/bugs/101'>Pull one down, patch it down</a>`   
)
})
module.exports= app;


app.get('/bugs/:numberOfBugs', (request,response) => {
    const {numberOfBugs} = request.params;
    const amountOfBugs = Number(numberOfBugs) + 2;

    if (numberOfBugs < 200) {
        response.send(
        `<h1> ${numberOfBugs} little bugs in the code </h1>
        <a href='/bugs/${amountOfBugs}'>Pull one down, patch it down</a>
        `
        )
    } else {
        response.send(
            `<h1> ${numberOfBugs} little bugs in the code </h1>
            <a href='/bugs'>Start Over </a>
            `
        )
    } 

})