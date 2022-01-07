const app = require(`${__dirname}/app`);

//CONFIGS
require('dotenv').config();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = PORT;
