const express = require('express');
const { postDonation, getAllDonations, updateDonation, getDonation } = require('../controllers/donation_controllers')
const router = express.Router();
const { upload } = require('../middleware/upload')

router.get('/all_donations',getAllDonations)
router.post('/update_donation',updateDonation)
router.get('/get_donation',getDonation)
router.post('/post_donation',upload.single('donation_image'),postDonation)

 

module.exports = router;

