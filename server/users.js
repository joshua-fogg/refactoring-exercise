const express = require('express')

const router = express.Router()
const db = require('./db')

router.use(express.json())

router.get('/', (req, res) => {
  const UserList = db.getUsers().then(userList => {
        res.json(UserList)
    })
})

module.exports = router
