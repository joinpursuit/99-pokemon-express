const dotenv = require("dotenv")
const mango = require("./app");

dotenv.config()

const PORT = process.env.PORT
mango.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`)
})