'use strict';

const bcrypt = require('bcryptjs');
const { loginService, generateToken } = require('./auth.service');

const loginController = async (req, res) => {
  const { email, password } = req.body;

  const user = await loginService(email);

  if (!user) {
    return res.status(400).send({ message: 'invalid email' });
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return res.status(400).send({ message: 'invalid password' });
  }

  const token = generateToken(user.id);

  res.send(token);
};

module.exports = loginController;
