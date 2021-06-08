const express = require("express");
const app = express();



app.get("/jumping/joyous/jellybean", (req,res) => {
    res.send("Congratulations on starting a new project called jumping-joyous-jellybean!")
})


app.listen(8888)