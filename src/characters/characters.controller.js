'use strict';

const {
  getAllCharactersService,
  getCharacterByIdService,
  createCharacterService,
  updateCharacterService,
  deleteCharacterService,
} = require('./characters.service');

const getAllCharactersController = async (req, res) => {
  const allCharacters = await getAllCharactersService();

  res.send(allCharacters);
};

const getCharacterByIdController = async (req, res) => {
  const idParam = req.params.id;

  const chosenCharacter = await getCharacterByIdService(idParam);

  res.send(chosenCharacter);
};

const createCharacterController = async (req, res) => {
  const body = req.body;

  const newCharacter = await createCharacterService(body);

  res.status(201).send(newCharacter);
};

const updateCharacterController = async (req, res) => {
  const idParam = req.params.id;
  const body = req.body;

  const updatedCharacter = await updateCharacterService(idParam, body);

  res.send(updatedCharacter);
};

const deleteCharacterController = async (req, res) => {
  const idParam = req.params.id;

  await deleteCharacterService(idParam);

  res.status(200).send();
};

module.exports = {
  getAllCharactersController,
  getCharacterByIdController,
  createCharacterController,
  updateCharacterController,
  deleteCharacterController,
};
