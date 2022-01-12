//dependencies
const express = require("express");
const app = express();

//routes
app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon");
});

// ~new project name generator
app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb, adjective, noun } = req.params;
    if( verb && adjective && noun ) {
        res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`); 
    } else if ( verb && adjective ){
        res.send(`Congratulations on starting a new project called ${verb}-${adjective}!`); 
    } else if ( verb && noun ){
        res.send(`Congratulations on starting a new project called ${verb}-${noun}!`); 
    } else if ( noun && adjective ){
        res.send(`Congratulations on starting a new project called ${adjective}-${noun}!`); 
    } else {
        res.send(`No new project defined in the form of verb-adjective-noun`);
    }
});

//~99 little bugs 
// 99 Little Bugs In the Code
// 99 little bugs in the code
// 99 little bugs
// Pull one down
// Patch it around
// 101 bugs in the code

// On the home page (get "/bugs"), users should see:
// "99 little bugs in the code"
// a link that says "pull one down, patch it around"
// this should link to /bugs/101, where the number represents the number of bugs remaining to fix
// When a number is given in the url (get "/bugs/:numberOfBugs"), users should see:
// The number of bugs left in the code (i.e. 101 little bugs in the code)


// a link to "pull one down, patch it around", where the href is number of bottles in the parameter plus 2
// If there over 200 bugs left, do not show a link to "pull one down", rather, add a link to start over, which directs the user back to the home page
// Hint: You should use an anchor tag with an href to link to the next 'page'

app.get("/bugs", (req, res) => {
    res.send("<h3>99 little bugs in the code <a href='/localhost:8888/bugs/101'>pull one down, patch it around</a></h3>");
});

app.get("/bugs/:numberOfBugs", (req, res) => {
    const { numberOfBugs } = req.params;
    const { x, y } = req.query;
    console.log(numberOfBugs, "this is the request params");
    console.log(x,y, "these are the query strings");

    if( numberOfBugs <  200 ) {
        res.send(`${numberOfBugs} in the code`)
    } else {

    }

})

//export 
module.exports = app;