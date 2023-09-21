// middleware/ipinfo.js
const axios = require("axios");

const getIpAddressInfo = async (req, res, next) => {
  const userIpAddress = req.ip;
  var checkIP;
  console.log("Ip", userIpAddress);
  await axios
    .get(`https://ipinfo.io/${userIpAddress}?token=ea322e70325c0c`)
    .then((res) => (checkIP = res.ip))
    .catch((err) => console.log(err));
  if (checkIP === userIpAddress) {
    res.send("Success");
  } else {
    res.send("Ip Does not match ");
  }

  next();
};

module.exports = getIpAddressInfo;
