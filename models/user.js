const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true
  },
  topRatedGOAT: {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    photo: {
      type: String,
      required: true,
      trim: true,
    },
  },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
