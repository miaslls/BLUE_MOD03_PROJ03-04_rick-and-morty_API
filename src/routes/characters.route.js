'use strict';

const express = require('express');
const router = express.Router();

const {
  getAllCharactersController,
  getCharacterByIdController,
} = require('../controllers/characters.controller');

router.get('/', getAllCharactersController);
router.get('/find/:id', getCharacterByIdController);

module.exports = router;
