const express = require('express')
const router = express.Router();
const { registerUser, confirmation, login, authentification, resendConfirmation, logout, getUser, update } = require('../controllers/user_controllers')
const { Auth } = require('../middleware/auth')
const { upload } = require('../middleware/upload')

router.post('/register', registerUser)
router.get('/confirmation', confirmation)
router.post('/login', login)
router.get('/auth', Auth, authentification)
router.post('/resend_confirmation', resendConfirmation)
router.get('/logout', logout)
router.get('/get_user', getUser)
router.post('/update',upload.single('image'),update)




module.exports = router;

