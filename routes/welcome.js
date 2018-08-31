const express = require('express');
const router = express.Router();
const User = require('../models/user')


/* GET login  */
router.get('/', function(req, res, next) {
  console.log(req)
  res.send({user: 'name'})
});// end of GET login

// Post login user
router.post('/login', function(req, res, next) {
  if (req.body.email && req.body.email) {
    console.log(req.body.email)
    User.authenticate(req.body.email, req.body.password, function (err, user) {
      if (err || !user) {
        const err = new Error('Wrong email or password');
        err.status = 401;
        return next(err);
      }
      res.redirect('/Home')
    });
  } else {
    const err = new Error('Please login with your email and password');
    err.status = 401
    return next(err)
  }
});// end of POST login user

/* POST new user. */
router.post('/welcome', function(req, res, next) {
  User.create({ userName: req.body.userName, email: req.body.email, password: req.body.password}, function (err, user) {
    if (err){
      return next(err)
    }
    res.redirect('/Home');

  });
});// end of POST new user

module.exports = router;
