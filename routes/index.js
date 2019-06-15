var express = require('express');
var router = express.Router();
const {signin, signup} = require('../controllers/userController');
/* GET home page. */
router.post('/signin', signin)
      .post('/signup', signup)

module.exports = router;
