const { Schema, model } = require('mongoose');

const registerSchema = new Schema({
  name: String,
  email: String,
  n: Number,
  m: String,
  result: Boolean
});

module.exports = model('Register', registerSchema);
