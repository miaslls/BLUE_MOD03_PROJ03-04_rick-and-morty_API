'use strict';

const Character = require('./Character');

const getAllCharactersService = async (offset, limit) => {
  return await Character.find().skip(offset).limit(limit).populate('user');
};

const countCharacters = async () => await Character.countDocuments();

const getCharacterByIdService = async (id) => await Character.findById(id);

const searchCharactersByNameService = async (query) => {
  return await Character.find({ name: { $regex: `${query || ''}`, $options: 'i' } });
};

const createCharacterService = async (name, imageUrl, userId) => {
  return await Character.create({ name, imageUrl, user: userId });
};

const updateCharacterService = async (id, body) => {
  return await Character.findByIdAndUpdate(id, body).setOptions({ returnOriginal: false });
};

const deleteCharacterService = async (id) => await Character.findByIdAndDelete(id);

module.exports = {
  getAllCharactersService,
  countCharacters,
  getCharacterByIdService,
  searchCharactersByNameService,
  createCharacterService,
  updateCharacterService,
  deleteCharacterService,
};
