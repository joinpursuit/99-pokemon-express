//DEDENDICIES
const app = require("./app.js")

//CONFIGUREATION

require("dotenv").config();
const PORT = process.env.PORT;

//LISTENER
app.listen(PORT, () => {
    console.log(`listening on Port ${PORT}`)
})