const express = require('express');
const router = express.Router();


/* Login User. */
router.get('/', function(req, res, next) {
  console.log('works')
  res.end()
});

router.post('/newGOAT', function(req, res, next) {
  console.log('newGoat')
  res.end()
})

module.exports = router;
