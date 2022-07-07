'use strict';

const mongoose = require('mongoose');

const validCharacterId = (req, res, next) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'invalid ID' });
  }

  next();
};

const validCharacterBody = (req, res, next) => {
  const { name, imageUrl } = req.body;

  if (!name || !imageUrl) {
    return res.status(400).send({ message: 'incomplete data' });
  }

  next();
};

module.exports = { validCharacterId, validCharacterBody };
