const dotenv = require("dotenv");
const app = require("./app");

dotenv.config();
process.env; //> {PORT: 3003}
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`🪨 Listening on port ${PORT} 💎 `);
});
