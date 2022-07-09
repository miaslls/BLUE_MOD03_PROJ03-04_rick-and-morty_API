'use strict';

const {
  getAllUsersService,
  getUserByUsernameService,
  getUserByEmailService,
  createUserService,
} = require('./users.service');

const getAllUsersController = async (req, res) => {
  const allUsers = await getAllUsersService();

  res.send(allUsers);
};

const createUserController = async (req, res) => {
  const { name, username, email, password, photo } = req.body;

  if (!name || !username || !email || !password || !photo) {
    return res.status(400).send({ message: 'incomplete data' });
  }

  const usernameInDb = await getUserByUsernameService(username);

  if (usernameInDb) {
    return res.status(400).send({ message: 'invalid username' });
  }

  const emailInDb = await getUserByEmailService(email);

  if (emailInDb) {
    return res.status(400).send({ message: 'invalid email' });
  }

  const user = await createUserService(req.body).catch((err) => console.log(err, message));

  if (!user) {
    return res.status(500).send({
      message: 'internal server error',
    });
  }

  res.status(201).send(user);
};

module.exports = { getAllUsersController, createUserController };
