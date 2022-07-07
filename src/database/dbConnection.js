'use strict';
const mongoose = require('mongoose');

const databaseConnection = () => {
  console.log('connecting to database');

  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MONGO DB CONNECTED ❤'))
    .catch((err) => console.log(`error connecting to database: ${err}`));
};

module.exports = databaseConnection;
