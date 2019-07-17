require('dotenv').config();
require('./db');
const app = require('./app');
const port = process.env.SERVER_PORT || 4000;

const init = () => {
  app.listen(port);
  console.log(`Server on port: ${port}`);
}

init();
