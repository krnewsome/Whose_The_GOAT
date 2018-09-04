const express = require('express');
const router = express.Router();
const User = require('../models/user')


/* Login User. */
router.post('/eWL', function(req, res, next) {
  console.log('works')
  res.redirect('/home')
});

router.post('/newGOAT', function(req, res, next) {
  // if(!req.session.userId ){
  //   const err = new Error ("Please Login or SignUp to Join others and Place Your Vote")
  //   err.status = 403;
  //   console.log(err)
  //   return next(err)
  // } else {
    console.log(req.body)
    return res.redirect('/')

})

module.exports = router;
