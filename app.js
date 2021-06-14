const express = require("express");
const app = express();

app.get("/:verb/:adjective/:noun", (req, res) => {
  // res.send('Congratulations on starting a new project called jumping-joyous-jellybean!')
  // res.send(req.params)
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});
app.get("/bugs", (req, res) => {
  const bugs = "99 little bugs in the code";
  const patch = "pull one down, patch it around";
  
    
  res.send(
    // `<a href="/bugs/:numberOfBugs">
    //     ${bugs} \n ${patch}
    // </a>`
      `${bugs} \n
      <a href="/bugs/:numberOfBugs">
        ${patch}
       </a>`
  );
});

app.get('/bugs/:numberOfBugs', (req, res) => {
    const {numberOfBugs} = req.params
    res.send(
        `${numberOfBugs} little bugs in the code \n pull one down, patch it around`)   
    
})

module.exports = app;
