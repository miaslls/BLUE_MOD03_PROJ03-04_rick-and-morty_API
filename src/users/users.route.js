'use strict';

const express = require('express');
const router = express.Router();

const authMiddleware = require('../auth/auth.middleware');

const { getAllUsersController, createUserController } = require('./users.controller');

router.get('/', authMiddleware, getAllUsersController);
router.post('/create', createUserController);

module.exports = router;
