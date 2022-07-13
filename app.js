const express = require('express');
require('dotenv').config();
const app = express();

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

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
