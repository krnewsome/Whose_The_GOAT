const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const UserGoatCard = require('../models/userGoatCard');
const apiKey = require( '../../client/src/config.js');


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
});// end of POST login user


let userZip;
let _id;
/* POST new user. */
router.post('/signUp', function(req, res, next) {
      // create new UserGoatCard
      const userGoatCard = new UserGoatCard({
        goatName: '',
        goatPPG: '',
        goatRPG: '',
        goatAPG: '',
      });
      userGoatCard.save(function (err, userGoatCard) {
        userGoatCard.goatVotes = user._id
        if (err) return next(err);
      })// end of save
      // create new User
      const user = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        userVote: 1,
        votePlayerID: '',
        userGoatCard: userGoatCard._id,
        userZip: req.body.userZip
      });
      user.save(function (err, user) {
        if (err) {
          return next(err)
        } else {
          userZip = req.body.userZip
          req.session.userId = user._id;
        }
      })// end of save
      res.redirect('/');
});// end of POST new user






module.exports = router;
