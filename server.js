const app = require('./app');
const dotenv = require('dotenv');

dotenv.config()
process.env;
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`🪨 Listening on port ${PORT} 💎 `);
})