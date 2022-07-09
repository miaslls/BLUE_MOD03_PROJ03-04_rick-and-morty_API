'use strict';

const User = require('./User');

const getAllUsersService = async () => await User.find();

module.exports = { getAllUsersService };
