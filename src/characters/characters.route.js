'use strict';

const express = require('express');
const router = express.Router();

const {
  getAllCharactersController,
  getCharacterByIdController,
  createCharacterController,
  updateCharacterController,
} = require('./characters.controller');

router.get('/', getAllCharactersController);
router.get('/find/:id', getCharacterByIdController);
router.post('/create', createCharacterController);
router.put('/update/:id', updateCharacterController);

module.exports = router;
