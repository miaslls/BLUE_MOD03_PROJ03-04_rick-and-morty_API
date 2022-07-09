'use strict';

const User = require('./User');

const getAllUsersService = async () => await User.find();

const getUserByUsernameService = async (username) => await User.findOne({ username: username });

const getUserByEmailService = async (email) => await User.findOne({ email: email });

const createUserService = async (body) => await User.create(body);

module.exports = {
  getAllUsersService,
  getUserByUsernameService,
  getUserByEmailService,
  createUserService,
};
