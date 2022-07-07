'use strict';

const { getAllCharactersService } = require('./characters.service.js');

const getAllCharactersController = async (req, res) => {
  const allCharacters = await getAllCharactersService();

  res.send(allCharacters);
};

module.exports = { getAllCharactersController };
