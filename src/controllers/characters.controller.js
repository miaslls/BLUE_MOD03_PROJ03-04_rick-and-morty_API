'use strict';

const { getAllCharactersService } = require('../services/characters.service');

const getAllCharactersController = async (req, res) => {
  const allCharacters = await getAllCharactersService();

  res.send(allCharacters);
};

module.exports = { getAllCharactersController };
