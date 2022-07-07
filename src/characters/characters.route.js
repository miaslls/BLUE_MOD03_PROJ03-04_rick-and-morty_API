'use strict';

const express = require('express');
const router = express.Router();

const { getAllCharactersController } = require('./characters.controller');

router.get('/', getAllCharactersController);

module.exports = router;
