// DEPENDENCIES

const app = require('./app.js');
const pokemon = require('./models/pokemon.json');

require('dotenv').config();
const PORT = process.env.PORT || 8888;

// LISTEN
app.listen(PORT, () => {
  console.log(`🪨 Listening on port ${PORT} 💎 `);
});
