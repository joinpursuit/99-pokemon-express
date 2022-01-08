// DEPENDENCIES
const app = require("./app");

// CONFIGURATION
require("dotenv").config();

// PORT
const PORT = process.env.PORT

// LISTEN
app.listen(PORT, () => {
  console.log(`💎💎💎Listening on port ${PORT}💎💎💎`)
})