const app = require("./app.js");
const PORT = process.env.PORT || 8888;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
