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

  votePlayerID: String,

  userVote: Number,

  photo: {
    type: String,
    trim: true,
  },

  userZip: {
    type: String,
    required: true,
    trim: true
  }
});

//Authentication
UserSchema.statics.authenticate = function(email, password, callback) {
  User.findOne({email: email})
    .exec(function (err, user) {
      if (err) {
        return callback(error);
      } else if (!user) {
        const err = new Error('User not found.');
        err.status = 401;
        return callback(err);
      }
      bcrypt.compare(password, user.password, function (err, result) {
        if (result === true) {
          return callback(null, user);
        } else {
          return callback();
        }
      })// end of compare
    });// end of exec
}


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
