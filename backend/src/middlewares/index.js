const cors = require('cors');
const { json } = require('express');

module.exports = app => {
  app.use(cors());
  app.use(json());
}
