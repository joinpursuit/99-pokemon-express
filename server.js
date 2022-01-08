const app = require("./app.js");
// inorder to use the dotenv...
require("dotenv").config();
// for listening in the port ...
const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log(` Listening on port ${PORT}  `);
});
