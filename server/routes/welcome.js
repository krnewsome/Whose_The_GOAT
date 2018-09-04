const express = require('express');
const router = express.Router();
const User = require('../models/user')
const apiKey = require( '../../client/src/config.js');


// Post login user
router.post('/login', function(req, res, next) {
  if (req.body.email && req.body.email) {
    console.log(req.body.email)
    User.authenticate(req.body.email, req.body.password, function (err, user) {
      if (err || !user) {
        const err = new Error('Wrong email or password');
        err.status = 401;
        return next(err);
      } else {
        console.log(req.session.userId )
        req.session.userId = user._id;
        console.log(req.session.userId )
        return res.redirect('/home');
      }
    });
  } else {
    const err = new Error('Please login with your email and password');
    err.status = 401
    return next(err)
  }
});// end of POST login user


let userZip;
/* POST new user. */
router.post('/signUp', function(req, res, next) {
  User.create({ userName: req.body.userName, email: req.body.email, password: req.body.password, userVote: 1, votePlayerID: '', userZip: req.body.userZip}, function (err, user) {
    if (err){
      return next(err)
    }
    userZip = req.body.userZip
    req.session.userId = user._id;
    res.redirect('/');

  });
});// end of POST new user






module.exports = router;
