const express = require('express')
const router = express.Router();
const { registerUser, confirmation, login, authentification, resendConfirmation, logout, getUser, donate, update } = require('../controllers/user_controllers')
const { Auth } = require('../middleware/auth')

router.post('/register', registerUser)
router.get('/confirmation', confirmation)
router.post('/login', login)
router.get('/auth', Auth, authentification)
router.post('/resend_confirmation', resendConfirmation)
router.get('/logout', logout)
router.get('/get_user', getUser)
router.get('/donate', donate)
router.post('/update', update)




module.exports = router;

