const dotenv = require('dotenv');

const app = require('./app');

dotenv.config();

process.env;

const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log('Listening on port ${PORT}');
});