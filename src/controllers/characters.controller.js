'use strict';

const {
  getAllCharactersService,
  getCharacterByIdService,
  // getCharacterByNameService,
} = require('../services/characters.service');

const getAllCharactersController = async (req, res) => {
  const allCharacters = await getAllCharactersService();

  res.send(allCharacters);
};

const getCharacterByIdController = async (req, res) => {
  const idParam = req.params.id;

  const chosenCharacter = await getCharacterByIdService(idParam);

  res.send(chosenCharacter);
};

module.exports = { getAllCharactersController, getCharacterByIdController };
