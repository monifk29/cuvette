
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  // Add more user-related fields here
});

const User = mongoose.model('User', userSchema);

module.exports = User;
