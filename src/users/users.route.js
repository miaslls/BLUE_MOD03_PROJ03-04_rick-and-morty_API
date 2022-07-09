'use strict';

const express = require('express');
const router = express.Router();

const { getAllUsersController, createUserController } = require('./users.controller');

router.get('/', getAllUsersController);
router.post('/create', createUserController);

module.exports = router;
