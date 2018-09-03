const express = require('express');
const router = express.Router();
const apiRouter = require('./api');

router.get('/', function(req, res, next) {
  res.redirect('/api');
});
router.use('/api', apiRouter)

module.exports = router;