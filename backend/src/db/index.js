const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI || 'mongodb://localhost/meanstack';

mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

const connection = mongoose.connection;

connection.once('open', () => console.log('DB Connected'));