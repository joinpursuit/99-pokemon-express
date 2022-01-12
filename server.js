const express = require("express");
const app = express();

require("dotenv").config();

app.get("/rocking/phenomenal/guitar", (req, res) => {
  res.send(`
       Congratulations on starting a new project called rocking-phenomenal-guitar!
        <img src="https://image.isu.pub/200415173849-5857cd8526e8cd9d91542c0e71805459/jpg/page_1.jpg" >
      `);
});
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`💎💎💎 Listening on port ${8888} 💎💎💎`);
});
