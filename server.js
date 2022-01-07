const dotenv = require("dotenv");
const app = require("./app");

dotenv.config();
process.env; //{PORT: 8888}
const PORT = process.env.PORT;

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
