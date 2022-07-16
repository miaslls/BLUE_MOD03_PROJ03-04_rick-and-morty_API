'use strict';

const Character = require('./Character');

const getAllCharactersService = (offset, limit) => {
  return Character.find().skip(offset).limit(limit).populate('user');
};

const countCharacters = () => Character.countDocuments();

const getCharacterByIdService = (id) => Character.findById(id);

const searchCharactersByNameService = (query) => {
  return Character.find({ name: { $regex: `${query || ''}`, $options: 'i' } });
};

const createCharacterService = (name, imageUrl, userId) => {
  return Character.create({ name, imageUrl, user: userId });
};

const updateCharacterService = (id, body) => {
  return Character.findByIdAndUpdate(id, body).setOptions({ returnOriginal: false });
};

const deleteCharacterService = (id) => Character.findByIdAndDelete(id);

module.exports = {
  getAllCharactersService,
  countCharacters,
  getCharacterByIdService,
  searchCharactersByNameService,
  createCharacterService,
  updateCharacterService,
  deleteCharacterService,
};
