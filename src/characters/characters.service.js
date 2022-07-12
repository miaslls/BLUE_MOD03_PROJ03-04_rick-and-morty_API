'use strict';

const Character = require('./Character');

const getAllCharactersService = async () => await Character.find();

const getCharacterByIdService = async (id) => await Character.findById(id);

const getCharacterByNameService = async (query) => await Character.findOne({ name: query });

const createCharacterService = async (name, imageUrl, userId) => {
  return await Character.create({ name, imageUrl, user: userId });
};

const updateCharacterService = async (id, body) => {
  return await Character.findByIdAndUpdate(id, body).setOptions({ returnOriginal: false });
};

const deleteCharacterService = async (id) => await Character.findByIdAndDelete(id);

module.exports = {
  getAllCharactersService,
  getCharacterByIdService,
  getCharacterByNameService,
  createCharacterService,
  updateCharacterService,
  deleteCharacterService,
};
