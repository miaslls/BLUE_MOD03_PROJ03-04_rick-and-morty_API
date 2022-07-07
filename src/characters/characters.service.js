'use strict';

const Character = require('./Character');

const getAllCharactersService = async () => await Character.find();

module.exports = { getAllCharactersService };
