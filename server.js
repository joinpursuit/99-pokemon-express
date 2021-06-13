//import app.js
const app = require("./app.js");
//import dotenv and config

require("dotenv").config();
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`)
});
