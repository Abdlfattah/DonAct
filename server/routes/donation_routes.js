const express = require('express');
const router = express.Router();
const { getDonations, getDonation, update, donate } = require('../controllers/donation_controllers')

router.get('/get_donations',getDonations)
router.get('/get_donation',getDonation)
router.post('/update',update)
router.post('/donate',donate)

module.exports = router;