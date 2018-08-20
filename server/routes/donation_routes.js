const express = require('express');
const { postDonation, getAllDonations, updateDonation } = require('../controllers/donation_controllers')
const router = express.Router();

router.post('/post_donation',postDonation)
router.get('/all_donations',getAllDonations)
router.post('/update_donation',updateDonation)



module.exports = router;

