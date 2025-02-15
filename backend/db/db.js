const mongoose = require('mongoose');

const connectToDb = () => {
  const uri = process.env.DB_CONNECT;
  mongoose
    .connect(uri)
    .then(() => {
      console.log('Connected to the database');
    })
    .catch((err) => {
      console.error('Error connecting to the database:', err);
    });
};

module.exports = connectToDb;
