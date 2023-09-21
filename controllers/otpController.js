// controllers/otpController.js

const twilioClient = require('../config/twilio');

const sendOTP = async (req, res) => {
  try {
    const userPhoneNumber = req.body.phoneNumber;

    const otp = Math.floor(1000 + Math.random() * 9000); // Generate a random 4-digit OTP

    await twilioClient.messages.create({
      body: `Your OTP is: ${otp}`,
      to: userPhoneNumber,
      from: 'your-twilio-phone-number',
    });

    res.status(200).json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).json({ error: 'Failed to send OTP' });
  }
};

module.exports = sendOTP;




const bcrypt = require('bcrypt');

// ...

const validateOTP = (req, res) => {
  const { otp, hashedOTP } = req.body;

  bcrypt.compare(otp, hashedOTP, (err, result) => {
    if (err || !result) {
      return res.status(401).json({ error: 'Invalid OTP' });
    }
    res.status(200).json({ message: 'OTP is valid' });
  });
};

module.exports = validateOTP;
