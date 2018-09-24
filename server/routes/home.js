const express = require('express');
const router = express.Router();
const User = require('../models/user');
const NBA = require("nba");
const UserGoatCard = require('../models/userGoatCard')
const apiKey = require("../../client/src/config")
var app = express();


/* GET userGoatCard. */
router.get('/userGoatCard', function(req, res, next) {
  if(req.session.userId){
    User.findById(req.session.userId)
      .exec(function (err, user) {
        let goatID = user.votePlayerID
        User.count({votePlayerID: user.votePlayerID}, function(err, count){
          let playerVoteCount = count
          res.send({goatID, playerVoteCount})
        })

      })
  }
});


/* GET top 5 Goat names/votes. */
router.get('/topGoats', function(req, res, next) {
    User.find().distinct('votePlayerID', function (err, playerIDs){
    })
    .then(function (ids){
      let test= []
        User.count({votePlayerID: ids[0]}, function(err, count){
        }).then(function(count){
          test.push(count)

        }).then(()=>{
          console.log(test)
          res.send(test)
        })
    })
});

// PUT update user with voted NBA player id
router.put('/newGOAT', function(req, res, next) {
  if(!req.session.userId ){
    const err = new Error ("Please Login or SignUp to Join others and Place Your Vote")
    err.status = 403;
    console.log(err)
    return next(err)
  } else {
    if( req.body.voteButtonType === 'Vote up' ) {
      let playerVoteCount;
      User.findById(req.session.userId)
        .exec(function(error, user){
          user.update({votePlayerID: req.body.votePlayerID, userVote: 0}, function(err, data){
          });

        })// end of exec

      // remove vote
    } else if(req.body.voteButtonType === 'Remove Vote'){
        User.findById(req.session.userId)
          .exec(
            function (error, user) {
                user.update({votePlayerID: '', userVote: 1}, function(err, data){
              })
            }
          )
      }
    res.send('putrequest')
  }
})// end of PUT


module.exports = router;
