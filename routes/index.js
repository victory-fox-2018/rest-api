var express = require('express');
var router = express.Router();
const { register, signIn } = require('../controller/userController');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.send('hello')
});

router.post('/signup', register);
router.post('/signin', signIn)

module.exports = router;
