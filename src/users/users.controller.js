'use strict';

const { getAllUsersService } = require('./users.service');

const getAllUsersController = async (req, res) => {
  const allUsers = await getAllUsersService();

  res.send(allUsers);
};

module.exports = { getAllUsersController };
