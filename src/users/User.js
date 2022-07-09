'use strict';

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, select: false },
    photo: { type: String, required: true },
  },
  { versionKey: false },
);

const User = mongoose.model('User', UserSchema, 'users');

module.exports = User;
