const express = require('express')
const router = express.Router();
const { registerUser, confirmation, login } = require('../controllers/user_controllers')

router.post('/register', registerUser)
router.get('/confirmation',confirmation)
router.post('/login',login)



module.exports = router;

