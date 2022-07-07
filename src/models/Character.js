'use strict';

const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    imageUrl: { type: String, required: true, unique: true },
  },
  { versionKey: false },
);

const Character = mongoose.model('Character', CharacterSchema, 'characters');

module.exports = Character;
