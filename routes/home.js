const express = require('express');
const router = express.Router();
const User = require('../models/user')


/* Login User. */
router.get('/', function(req, res, next) {
    console.log('err')
  res.send('2fsda');
});

module.exports = router;
