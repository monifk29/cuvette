const express = require('express');
const router = express.Router();
const sendOTP = require('../controllers/otpController');
const validateOTP = require('../controllers/otpController');

router.post('/send', sendOTP);
router.post('/validate', validateOTP);

module.exports = router;

