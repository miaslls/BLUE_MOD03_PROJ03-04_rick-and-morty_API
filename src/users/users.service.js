'use strict';

const User = require('./User');

const getAllUsersService = () => User.find();

const getUserByUsernameService = (username) => User.findOne({ username: username });

const getUserByEmailService = (email) => User.findOne({ email: email });

const getUserById = (id) => User.findById(id);

const createUserService = (body) => User.create(body);

module.exports = {
  getAllUsersService,
  getUserByUsernameService,
  getUserByEmailService,
  getUserById,
  createUserService,
};
