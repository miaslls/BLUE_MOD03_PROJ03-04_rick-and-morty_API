'use strict';

const {
  getAllCharactersService,
  getCharacterByIdService,
  searchCharactersByNameService,
  createCharacterService,
  updateCharacterService,
  deleteCharacterService,
} = require('./characters.service');

const getAllCharactersController = async (req, res) => {
  try {
    const allCharacters = await getAllCharactersService();

    if (!allCharacters) {
      return res.status(404).send({ message: 'not found' });
    }

    res.send({
      results: allCharacters.map((character) => ({
        id: character._id,
        name: character.name,
        imageUrl: character.imageUrl,
        user: character.user,
      })),
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const getCharacterByIdController = async (req, res) => {
  try {
    const idParam = req.params.id;

    const chosenCharacter = await getCharacterByIdService(idParam);

    if (!chosenCharacter) {
      return res.status(404).send({ message: 'not found' });
    }

    res.send(chosenCharacter);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const searchCharactersByNameController = async (req, res) => {
  try {
    const query = req.query.name;

    if (!query) {
      return res.status(400).send({ message: 'bad request' });
    }

    const chosenCharacters = await searchCharactersByNameService(query);

    if (!chosenCharacters) {
      return res.status(404).send({ message: 'not found' });
    }

    res.send({
      characters: chosenCharacters.map((character) => ({
        id: character._id,
        name: character.name,
        imageUrl: character.imageUrl,
        user: character.user,
      })),
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const createCharacterController = async (req, res) => {
  try {
    const { name, imageUrl } = req.body;

    const { id } = await createCharacterService(name, imageUrl, req.userId);

    res.status(201).send({
      message: 'created',
      character: { id, name, imageUrl },
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const updateCharacterController = async (req, res) => {
  try {
    const idParam = req.params.id;
    const body = req.body;

    const chosenCharacter = await getCharacterByIdService(idParam);

    if (!chosenCharacter) {
      return res.status(404).send({ message: 'not found' });
    }

    const updatedCharacter = await updateCharacterService(idParam, body);

    res.send(updatedCharacter);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const deleteCharacterController = async (req, res) => {
  try {
    const idParam = req.params.id;

    const chosenCharacter = await getCharacterByIdService(idParam);

    if (!chosenCharacter) {
      return res.status(404).send({ message: 'not found' });
    }

    await deleteCharacterService(idParam);

    res.status(200).send({ message: 'deleted' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = {
  getAllCharactersController,
  getCharacterByIdController,
  searchCharactersByNameController,
  createCharacterController,
  updateCharacterController,
  deleteCharacterController,
};
