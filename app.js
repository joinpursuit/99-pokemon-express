const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send(`Welcome 99 Pokemon`);
});

app.get("/bugs", (request, response) => {
  response.send(`<h1>99 little bugs in the code</h1>`);
});
app.get("/bugs/:number_of_bugs", (req, res) => {
  const { number_of_bugs } = req.params;
  if (number_of_bugs < 200) {
    res.send(`<p>${number_of_bugs} little bugs in the code</p>
      <a href=${Number(number_of_bugs) + 2}>Pull one down, patch it around</a>`);
  } else {
    res.send("Too many bugs!! Start over!");
  }
});

app.get("/:verb/:adjective/:noun", (request, response) => {
  console.log(request.params);
  const { verb, adjective, noun } = request.params;
  response.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}`);
});

module.exports = app;
