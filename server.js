const app = require('./app.js')

require('dotenv').config()


app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`)
})
