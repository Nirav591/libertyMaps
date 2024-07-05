const express = require('express');
const otpController = require('../controllers/otpController');
const router = express.Router();

router.post('/forgot-password', otpController.forgotPassword);
router.post('/verify-otp', otpController.verifyOtp);

module.exports = router;
