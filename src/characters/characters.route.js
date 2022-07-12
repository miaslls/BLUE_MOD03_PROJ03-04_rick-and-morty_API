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

const authMiddleware = require('../auth/auth.middleware');

router.get('/', authMiddleware, getAllCharactersController);
router.get('/find/:id', authMiddleware, validCharacterId, getCharacterByIdController);
router.get('/search', authMiddleware, getCharacterByNameController);
router.post('/create', authMiddleware, validCharacterBody, createCharacterController);
router.delete('/delete/:id', authMiddleware, validCharacterId, deleteCharacterController);
router.put(
  '/update/:id',
  authMiddleware,
  validCharacterId,
  validCharacterBody,
  updateCharacterController,
);

module.exports = router;
