'use strict';

const express = require('express');
const router = express.Router();

const {
  getAllCharactersController,
  getCharacterByIdController,
  createCharacterController,
  updateCharacterController,
  deleteCharacterController,
} = require('./characters.controller');

router.get('/', getAllCharactersController);
router.get('/find/:id', getCharacterByIdController);
router.post('/create', createCharacterController);
router.put('/update/:id', updateCharacterController);
router.delete('/delete/:id', deleteCharacterController);

module.exports = router;
