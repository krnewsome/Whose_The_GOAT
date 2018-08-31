const mongoose = require('mongoose');
const bcrypt =require('bcrypt');


const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  userName: {
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
      trim: true,
    },
    photo: {
      type: String,
      trim: true,
    },
  },
});

//Authentication



// Hash password
UserSchema.pre('save', function(next){
  const user = this;
  bcrypt.hash(user.password, 10, function(err, hash){
    if(err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
})



const User = mongoose.model('User', UserSchema);
module.exports = User;
