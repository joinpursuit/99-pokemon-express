const express = require('express');
require('dotenv').config();
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome 99 Pokemon');
});

app.get('/:verb/:adjective/:noun', (req, res) => {
  const { verb, adjective, noun } = req.params;
  if (verb === 'jumping' && adjective === 'joyous' && noun === 'jellybean') {
    res.send(
      'Congratulations on starting a new project called jumping-joyous-jellybean!'
    );
  } else {
    res.send(
      `Congratulations on starting a new project called ${verb} ${adjective} ${noun}!`
    );
  }
});

app.get('/bugs', (req, res) => {
  res.send(`<h1>99 little bugs in the code</h1>
    <a href="/bugs/101">pull one down, patch it around </a>`);
});

app.get('/bugs/:numberOfBugs', (req, res) => {
  let { numberOfBugs } = req.params;

  let numbugs = Number(numberOfBugs);

  if (numbugs < 200) {
    res.send(`<h1>${numbugs} little bugs in the code</h1>
      <a href="/bugs/${numbugs + 2}">Pull one down, patch it around</a> `);
  } else {
    res.send(`
        <h1>${numbugs} little bugs in the code</h1>
        <a href="/bugs">Too many bugs!! Start over!</a>`);
  }
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
