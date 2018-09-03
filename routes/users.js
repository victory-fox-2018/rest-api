var express = require('express');
var router = express.Router();
const User = require('../controllers/user');
const {isLogin} = require('../midleware/isLogin');
const {isAdmin} = require('../midleware/isAdmin');


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/signup', User.signup);
router.post('/signin', User.signin);
router.get('/', User.findAll);
// router.get('/:id', User.findOne);
router.post('/', isLogin, isAdmin, User.create);
router.post('/:id', User.erase);
// router.put('/:id', User.update);

module.exports = router;