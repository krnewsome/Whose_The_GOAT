const express = require('express');
const router = express.Router();
const User = require('../models/user')


/* Login User. */
router.post('/', function(req, res, next) {
  User.create({ userName: req.body.userName, email: req.body.email, password: req.body.password}, function (err, user) {
    console.log(err)
  if (err) return err;
  console.log(user)
  });
  res.redirect('/Home');

});

module.exports = router;
