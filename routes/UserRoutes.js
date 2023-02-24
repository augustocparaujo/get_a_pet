const router = require('express').Router()

const UserConstroller = require('../controllers/UserController')

router.post('/register', UserConstroller.register)

module.exports = router