const dotenv = require('dotenv')
const app = require('./app');

dotenv.config()
const PORT = process.env.PORT; //> {PORT: 8888}

app.listen(PORT, () =>{
    console.log(`Success! 🥔 Listening on port ${PORT} 💎 `)
})