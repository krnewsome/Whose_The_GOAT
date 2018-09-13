const express = require('express');
const router = express.Router();
const User = require('../models/user');
const NBA = require("nba");
const UserGoatCard = require('../models/userGoatCard')


/* GET userGoatCard. */
router.get('/userGoatCard', function(req, res, next) {
  User.findById(req.session.userId)
    .populate('userGoatCard')
    .exec(function (err, user) {
      let goatcard = user.userGoatCard
      let goatID = user.votePlayerID
      User.count({votePlayerID: user.votePlayerID}, function(err, count){
        let playerVoteCount = count
        res.send({goatcard, goatID, playerVoteCount})
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
      User.findById(req.session.userId)
        .exec(function(error, user){
          if(user.userVote !== 0) {
            user.update({votePlayerID: req.body.votePlayerID, userVote: 0}, function(err, data){
              NBA.stats.playerInfo({ PlayerID: req.body.votePlayerID })
              .then(playerData => {
                UserGoatCard.findById(user.userGoatCard._id)
                .exec(function (err, userGoatCard){
                  userGoatCard.update({
                    goatName: playerData.playerHeadlineStats[0].playerName,
                    goatPPG: playerData.playerHeadlineStats[0].pts,
                    goatRPG: playerData.playerHeadlineStats[0].reb,
                    goatAPG: playerData.playerHeadlineStats[0].ast}, function(err, updatedGoatCard){
                  })
                })
              });
            });
          } else {
            let err = new Error('User has no avaiable votes')
            console.log(err)
            return next (err)
          }
        })// end of exec

        // remove vote
      } else {
        User.findById(req.session.userId)
          .exec(
            function (error, user) {
                user.update({votePlayerID: '', userVote: 1}, function(err, data){
                  NBA.stats.playerInfo({ PlayerID: req.body.votePlayerID })
                  .then(playerData => {
                    UserGoatCard.findById(user.userGoatCard._id)
                    .exec(function (err, userGoatCard){
                      userGoatCard.update({
                        goatName: '',
                        goatPPG: '',
                        goatRPG: '',
                        goatAPG: ''}, function(err, updatedGoatCard){
                      })
                    })
                  });
                })

            }
          )
      }
    res.send('putrequest')
  }
})// end of PUT

module.exports = router;
