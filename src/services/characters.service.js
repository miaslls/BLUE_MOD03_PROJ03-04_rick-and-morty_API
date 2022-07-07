'use strict';

const Character = require('../models/Character');

const getAllCharactersService = async () => await Character.find();

module.exports = { getAllCharactersService };
