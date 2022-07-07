'use strict';

const Character = require('./Character');

const getAllCharactersService = async () => await Character.find();

const getCharacterByIdService = async (id) => await Character.findById(id);

const createCharacterService = async (body) => await Character.create(body);

module.exports = {
  getAllCharactersService,
  getCharacterByIdService,
  createCharacterService,
};
