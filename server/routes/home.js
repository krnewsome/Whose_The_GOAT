/*---------- REQUIRE ----------*/
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const NBA = require("nba");
const apiKey = require("../../client/src/config");
var app = express();
let votedGoatArray= [];
/*---------- ROUTES ----------*/
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
});// END OF GET USEGOATCARD

/* GET top 5 Goat names/votes. */
router.get('/topGoats', function(req, res, next) {
    User.find().distinct('votePlayerID', function(err, playerIDs){
    playerIDs.forEach(function(player){
      if(player !== ''){
        User.count({votePlayerID: player}, function(err, count){
          if(votedGoatArray.length < 5){
            votedGoatArray.push({pID: player, pVoteCount: count})
          }
        })
      }
    })
  })// END OF DICSTINCT
  .then(()=>{
    votedGoatArray.sort(function (a, b) {
      return b.pVoteCount - a.pVoteCount
    })
    let top5VotedGoats = votedGoatArray.slice(0,5)
    res.send({top5VotedGoats})
  })// END OF THEN
}); // END OF GET TOP 5 GOATS

// PUT update user with voted NBA player id
router.put('/newGOAT', function(req, res, next) {
  console.log(req.session.userId)
  if(!req.session.userId ){
    const err = new Error ("Please Login or SignUp to Join others and Place Your Vote")
    err.status = 403;
    console.log(err)
    return next(err)
  } else {
    if( req.body.voteButtonType === 'Vote up' ) {
      let playerVoteCount;
      User.findById(req.session.userId)
        .exec(
          function(error, user){
              user.update({votePlayerID: req.body.votePlayerID, userVote: 0}, function(err, data){
            });
          }
        )// END OF EXEC
      // remove vote
    } else if(req.body.voteButtonType === 'Remove Vote'){
        User.findById(req.session.userId)
          .exec(
            function(error, user) {
                user.update({votePlayerID: '', userVote: 1}, function(err, data){
              })
            }
          )// END OF EXEC
      }
    res.send('putrequest')
  }
})// END OF PUT

/*---------- EXPORTS ----------*/
module.exports = router;
