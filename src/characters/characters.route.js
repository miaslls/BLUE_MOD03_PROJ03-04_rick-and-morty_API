'use strict';

const express = require('express');
const router = express.Router();

const {
  getAllCharactersController,
  getCharacterByIdController,
  getCharacterByNameController,
  createCharacterController,
  updateCharacterController,
  deleteCharacterController,
} = require('./characters.controller');

const { validCharacterId, validCharacterBody } = require('./characters.middleware');

router.get('/', getAllCharactersController);
router.get('/find/:id', validCharacterId, getCharacterByIdController);
router.get('/search', getCharacterByNameController);
router.post('/create', validCharacterBody, createCharacterController);
router.put('/update/:id', validCharacterId, validCharacterBody, updateCharacterController);
router.delete('/delete/:id', validCharacterId, deleteCharacterController);

module.exports = router;
