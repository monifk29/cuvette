
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://monif:Finom1234@cluster0.gocvx.mongodb.net/cuvette', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(`MongoDB connection error: ${err.message}`));

module.exports = mongoose;
