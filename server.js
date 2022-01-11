// DEPENDENCIES
const app = require("./app");

// CONFIG
require("dotenv").config()
process.env;
const PORT = process.env.PORT;

// ROUTES
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});