'use strict';

const {
  getAllCharactersService,
  getCharacterByIdService,
  getCharacterByNameService,
  createCharacterService,
  updateCharacterService,
  deleteCharacterService,
} = require('./characters.service');

const getAllCharactersController = async (req, res) => {
  const allCharacters = await getAllCharactersService();

  if (allCharacters.length === 0) {
    return res.status(404).send();
  }

  res.send(allCharacters);
};

const getCharacterByIdController = async (req, res) => {
  const idParam = req.params.id;

  const chosenCharacter = await getCharacterByIdService(idParam);

  if (!chosenCharacter) {
    return res.status(404).send();
  }

  res.send(chosenCharacter);
};

const getCharacterByNameController = async (req, res) => {
  const query = req.query.name;

  if (!query) {
    return res.status(400).send();
  }

  const chosenCharacter = await getCharacterByNameService(query);

  if (!chosenCharacter) {
    return res.status(404).send();
  }

  res.send(chosenCharacter);
};

const createCharacterController = async (req, res) => {
  const body = req.body;

  if (!body) {
    res.status(400).send({ message: 'incomplete data' });
  }

  const newCharacter = await createCharacterService(body, req.userId);

  res.status(201).send(newCharacter);
};

const updateCharacterController = async (req, res) => {
  const idParam = req.params.id;
  const body = req.body;

  const chosenCharacter = await getCharacterByIdService(idParam);

  if (!chosenCharacter) {
    return res.status(404).send();
  }

  const updatedCharacter = await updateCharacterService(idParam, body);

  res.send(updatedCharacter);
};

const deleteCharacterController = async (req, res) => {
  const idParam = req.params.id;

  const chosenCharacter = await getCharacterByIdService(idParam);

  if (!chosenCharacter) {
    return res.status(404).send();
  }

  await deleteCharacterService(idParam);

  res.status(200).send();
};

module.exports = {
  getAllCharactersController,
  getCharacterByIdController,
  getCharacterByNameController,
  createCharacterController,
  updateCharacterController,
  deleteCharacterController,
};
