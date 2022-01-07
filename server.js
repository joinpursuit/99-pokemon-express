const app = require('./app.js');
const dotenv = require('dotenv');

dotenv.config();
const PORT = process.env.PORT; //> { PORT: 8888 }

app.listen(PORT, () => {
    console.log(`🪨 Listening on port ${PORT} 💎 `)
});