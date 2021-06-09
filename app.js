// const express = require("express");
// const app = express();

// app.get("/", (req,res) => {
//     res.send("Welcome 99 Pokemon")
// })

// app.get("/bugs", (req,res) =>{
//     res.send(`<h1>99 little bugs in the code</h1> <br></br> <a href="/bugs/101">pull one down,patch it around</a>`)
// })

// app.get("/jumping/joyous/jellybean", (req,res) => {
//     res.send("Congratulations on starting a new project called jumping-joyous-jellybean!")
// })

// app.listen(8888)

const express = require("express");
const app = express();

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}`
  );
});

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get("/bugs", (req, res) => {
  res.send(
    `<h1>99 little bugs in the code</h1> <br></br> 
    <a href="/bugs/101">pull one down,patch it around</a>
    `
  );
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  if (numberOfBugs >= 200) {
    res.send(
      `<a href="/bugs/">Too many bugs!! Start over!</a>`
    );
  } else {
    res.send(`${numberOfBugs} little bugs in the code
      <a href="/bugs/${Number(numberOfBugs) + 2}">Pull one down, patch it around</a>
      `);
    // res.send("This is else statement")
  }
});

app.get("/pokemon", (req,res) => {
    
})

module.exports = app;
