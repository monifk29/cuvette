// config/twilio.js

const twilio = require('twilio');

const accountSid = 'your-account-sid';
const authToken = 'your-auth-token';

const twilioClient = new twilio(accountSid, authToken);

module.exports = twilioClient;
