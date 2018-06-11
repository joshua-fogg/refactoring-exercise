const express = require('express');

const router = express.Router();
const db = require('./db');

router.use(express.json());

router.get('/', (req, res) => {
  const userList = db.getUsers();
  return userList.then(users => {
    return res.json(users);
  });
});

module.exports = router;
