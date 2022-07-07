'use strict';

const express = require('express');
const router = express.Router();

const {
  getAllCharactersController,
  getCharacterByIdController,
  createCharacterController,
} = require('./characters.controller');

router.get('/', getAllCharactersController);
router.get('/find/:id', getCharacterByIdController);
router.post('/create', createCharacterController);

module.exports = router;
