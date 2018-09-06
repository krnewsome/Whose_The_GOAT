const express = require('express');
const router = express.Router();
const User = require('../models/user')


/* Login User. */
router.post('/eWL', function(req, res, next) {
  res.redirect('/home')
});

// PUT update user with voted NBA player id
router.put('/newGOAT', function(req, res, next) {
  if(!req.session.userId ){
    const err = new Error ("Please Login or SignUp to Join others and Place Your Vote")
    err.status = 403;
    console.log(err)
    return next(err)
  } else {
    console.log(req.body.voteButtonType)
    if( req.body.voteButtonType === 'Vote up' ) {
      console.log(req.session.userId )
      User.findById(req.session.userId)
        .exec(function(error, user){
          console.log(user)
          if(user.userVote !== 0) {
            user.update({votePlayerID: req.body.votePlayerID, userVote: 0}, function(err, data){
              console.log(data)
            })
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
              console.log(user)
              if (user.userVote === 0 && user.votePlayerID === req.body.votePlayerID) {
                user.update({votePlayerID: '', userVote: 1}, function(err, data){
                  console.log(data)
                })
              } else {
                if (user.votePlayerID !== req.body.votePlayerID) {
                  let err = new Error('Please search for your GOAT first before removing Vote')
                  console.log(err)
                  return next (err)
                } else {
                  if (user.userVote !== 0) {
                    let err = new Error('Please vote for your favorite GOAT')
                    console.log(err)
                    return next (err)
                  }
                }
              }
            }
          )
      }
    console.log(req.body)
    res.send('putrequest')
  }
})// end of PUT

module.exports = router;
