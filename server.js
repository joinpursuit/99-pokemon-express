// Configuration:

const app = require("./app.js");

// Need these two lines in order to work!!
require("dotenv").config();
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`App is live on port ${PORT}`)
}) 


