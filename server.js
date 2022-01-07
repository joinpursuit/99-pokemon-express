const app = require("./app")
const dotenv = require("dotenv")

dotenv.config()
const { PORT } = process.env

app.listen(PORT, ()=> {
    console.log(`Success! Listening to port ${PORT}`)
})
