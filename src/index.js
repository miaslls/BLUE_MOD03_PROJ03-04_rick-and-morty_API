'use strict';

const express = require('express');
const cors = require('cors');
const databaseConnection = require('./database/dbConnection');
const userRoutes = require('./users/users.route');
const authRoute = require('./auth/auth.route');
const characterRoutes = require('./characters/characters.route');
const swaggerRoutes = require('./swagger/swagger.routes');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

databaseConnection();

app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);
app.use('/auth', authRoute);
app.use('/characters', characterRoutes);
app.use('/api-docs', swaggerRoutes);

app.listen(port, () => {
  console.log(`server running @ port ${port}`);
});
