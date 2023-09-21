// server.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const database = require('./config/database');
const getIpAddressInfo = require('./middleware/ipinfo');
const authRoutes = require('./routes/authRoutes');
const otpRoutes = require('./routes/otpRoutes');

app.use(bodyParser.json());
app.use(getIpAddressInfo);

app.use('/auth',getIpAddressInfo, authRoutes);
app.use('/otp', otpRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
