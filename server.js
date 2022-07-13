const app = require("./app");

const port = process.env.PORT || 8888;

app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`Listening on port ${port}`);
});
