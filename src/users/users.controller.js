'use strict';

const {
  getAllUsersService,
  getUserByUsernameService,
  getUserByEmailService,
  createUserService,
} = require('./users.service');

const { generateToken } = require('../auth/auth.service');

const getAllUsersController = async (req, res) => {
  try {
    const allUsers = await getAllUsersService();

    if (allUsers.length === 0) {
      return res.status(404).send({ message: 'no users in DB' });
    }

    res.send(allUsers);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const createUserController = async (req, res) => {
  try {
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

    const token = generateToken(user.id);

    res.status(201).send({
      user: {
        id: user.id,
        name,
        username,
        email,
        photo,
      },
      token,
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = { getAllUsersController, createUserController };
