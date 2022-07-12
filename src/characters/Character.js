'use strict';

const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    name: { type: String, required: true, unique: true },
    imageUrl: { type: String, required: true },
  },
  { versionKey: false },
);

const Character = mongoose.model('Character', CharacterSchema, 'characters');

module.exports = Character;
