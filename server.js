// DEPENDENCIES
const dotenv = require("dotenv")
const mango = require("./app");

// CONFIGURATION
dotenv.config()
const PORT = process.env.PORT

// LISTEN
mango.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`)
})