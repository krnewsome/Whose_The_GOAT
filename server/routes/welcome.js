/*---------- REQUIRE ----------*/
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const apiKey = require( '../../client/src/config.js');

/*---------- ROUTES ----------*/
// Post login user
router.post('/login', function(req, res, next) {
  if (req.body.email && req.body.email) {
    User.authenticate(req.body.email, req.body.password, function (err, user) {
      if (err || !user) {
        const err = new Error('Wrong email or password');
        err.status = 401;
        return next(err);
      } else {
        req.session.userId = user._id;
        return res.redirect('/home');
      }
    });
  } else {
    const err = new Error('Please login with your email and password');
    err.status = 401
    return next(err)
  }
});// END OF POST LOGIN USER

/* POST new user. */
router.post('/signUp', function(req, res, next) {
  if(req.body.password === req.body.password2){
    const user = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
      userVote: 1,
      votePlayerID: '',
      userZip: req.body.userZip
    });
    user.save(function (err, user) {
      if (err) {
        return next(err)
      } else {
        userZip = req.body.userZip
        req.session.userId = user._id;
      }
    })// END OF SAVE
    res.redirect('/');

  } else {
    console.log('passwords do not match')
    res.redirect('/');
  }
});// END OF POST NEW USER

/*---------- EPORTS ----------*/
module.exports = router;
