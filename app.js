const express = require("express");

const app = express();

app.get("/jumping/joyous/jellybean", (req, res) => {
    const verb = "jumping"
    const adjective = "joyous"
    const noun = "jellybean"
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!
    `);
  });

  app.get("/bugs", (req, res) => {
        res.send(`<h1>99 little bugs in the code</h1>`
            )
    })


module.exports = app