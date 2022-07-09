'use strict';

const User = require('../users/User');

const loginService = async (email) => await User.findOne({ email: email }).select('+password');

module.exports = loginService;
