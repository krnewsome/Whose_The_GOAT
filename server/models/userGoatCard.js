const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserGoatCardSchema = new mongoose.Schema({
  _id: {
    type: Schema.ObjectId,
    auto: true,
    required: true,
  },
 goatName: String,
 goatPPG: String,
 goatRPG: String,
 goatAPG: String,
 goatVotes: [
   { type: Schema.ObjectId,
     ref: 'User'
   }
 ]

});

const UserGoatCard = mongoose.model('UserGoatCard', UserGoatCardSchema);
module.exports = UserGoatCard;
