/*---------- REQUIRE ----------*/
const mongoose = require('mongoose');
const bcrypt =require('bcrypt');
const Schema = mongoose.Schema

/*---------- USERSCHEMA ----------*/
const UserSchema = new mongoose.Schema({
  _id: {
    type: Schema.ObjectId,
    auto: true,
    required: true,
  },
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

});// END OF USERSCHEMA

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
      })// END OF COMPARE
    });// END OF EXEC
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
  })// END OF HASH
})// END OF PRE SAVE

/*---------- MODELS ----------*/
const User = mongoose.model('User', UserSchema);

/*---------- EXPORTS ----------*/
module.exports = User;
