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

const { validCharacterId, validCharacterBody } = require('./characters.middleware');

router.get('/', getAllCharactersController);
router.get('/find/:id', validCharacterId, getCharacterByIdController);
router.post('/create', validCharacterBody, createCharacterController);
router.put('/update/:id', validCharacterId, validCharacterBody, updateCharacterController);
router.delete('/delete/:id', validCharacterId, deleteCharacterController);

module.exports = router;
