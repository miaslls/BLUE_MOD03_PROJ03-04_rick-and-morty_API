'use strict';

const Character = require('./Character');

const getAllCharactersService = async () => await Character.find();

const getCharacterByIdService = async (id) => await Character.findById(id);

const createCharacterService = async (body) => await Character.create(body);

const updateCharacterService = async (id, body) => {
  return await Character.findByIdAndUpdate(id, body).setOptions({ returnOriginal: false });
};

module.exports = {
  getAllCharactersService,
  getCharacterByIdService,
  createCharacterService,
  updateCharacterService,
};
