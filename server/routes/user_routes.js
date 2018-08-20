const express = require('express')
const router = express.Router();
const { registerUser, confirmation, login, authentification, makeDonation } = require('../controllers/user_controllers')
const { Auth } = require('../middleware/auth')

router.post('/register', registerUser)
router.get('/confirmation', confirmation)
router.post('/login', login)
router.get('/auth', Auth, authentification)
router.post('/auth', makeDonation)

module.exports = router;

