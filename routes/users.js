var express = require('express');
var router = express.Router();
const User = require('../controllers/user');
const {isLogin} = require('../midleware/isLogin');
const {isAdmin} = require('../midleware/isAdmin');

router.post('/signup', User.signup);
router.post('/signin', User.signin);
router.get('/', isLogin, isAdmin, User.findAll);
router.get('/:id', isLogin, User.findOne);
router.post('/', isLogin, isAdmin, User.create);
router.delete('/:id', isLogin, isAdmin, User.erase);
router.put('/:id', isLogin, User.update);

module.exports = router;