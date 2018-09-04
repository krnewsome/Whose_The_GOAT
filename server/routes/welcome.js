const express = require('express');
const router = express.Router();
const User = require('../models/user')
const apiKey = require( '../../client/src/config.js');


/* GET login  */
router.get('/', function(req, res, next) {
  console.log('/')
  res.send({key:'works'})
});

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
      res.redirect('/home')
    });
  } else {
    const err = new Error('Please login with your email and password');
    err.status = 401
    return next(err)
  }
});// end of POST login user
let userZip;
/* POST new user. */
router.post('/welcome', function(req, res, next) {
  User.create({ userName: req.body.userName, email: req.body.email, password: req.body.password, userZip: req.body.userZip}, function (err, user) {
    if (err){
      return next(err)
    }
    userZip = req.body.userZip

    res.redirect('/home');

  });
});// end of POST new user
router.get('/search-location-weather', (req, res) => {
  fetch(`http://api.openweathermap.org/data/2.5/weather?zip=20743&appid=${apiKey.key}`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    res.send({ data });
  })
  .catch(err => {
    res.redirect('/error');
  });
})




module.exports = router;
