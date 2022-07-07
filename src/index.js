'use strict';

const express = require('express');
const cors = require('cors');
const databaseConnection = require('./database/dbConnection');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

databaseConnection();

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`server running @ http://localhost:${port} 🔗`);
});