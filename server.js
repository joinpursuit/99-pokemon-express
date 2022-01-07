// requiring express
const express = require("express");
const res = require("express/lib/response");
// calling express
const app = express();

// inorder to use the dotenv...
require("dotenv").config();

app.get("/", (req, res) => {
	res.send("The data has been send");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log(` Listening on port ${PORT}  `);
});
