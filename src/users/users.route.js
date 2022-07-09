'use strict';

const express = require('express');
const router = express.Router();

const { getAllUsersController } = require('./users.controller');

router.get('/', getAllUsersController);

module.exports = router;
