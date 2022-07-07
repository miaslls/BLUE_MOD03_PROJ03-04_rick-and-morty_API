'use strict';

const Character = require('../models/Character');

const getAllCharactersService = async () => await Character.find();

const getCharacterByIdService = async (id) => await Character.findById(id);

// const getCharacterByNameService = async (name) => await Character.find({ name: name });
//
// const createCharacterService = async (body) => await Character.create(body);

module.exports = {
  getAllCharactersService,
  getCharacterByIdService,
  //   getCharacterByNameService,
  //   createCharacterService,
};
