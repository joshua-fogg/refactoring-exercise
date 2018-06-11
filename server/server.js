const path = require('path');
const express = require('express');

const userController = require('./users');
const server = express();

server.use(express.static(path.join(__dirname, '../public')));

server.use('/api/v1/users', userController);

module.exports = server;
