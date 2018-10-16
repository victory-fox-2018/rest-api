var express = require('express');
var router = express.Router();
var {isLogin} = require('../middleware/isLogin')
var {isAdmin} = require('../middleware/isAdmin')
var {isHim} = require('../middleware/isHim')
var { getUsers, createUser, login, getUserById, removeUser, updateUser } = require('../controllers/api')

router.get('/', function(req, res, next) {
  res.send('HALO INI API');
});

router.post('/signup', createUser)
router.post('/signin', login)

router.get('/users', isLogin, isAdmin, getUsers)
router.post('/users', isLogin, isAdmin, createUser)

router.get('/users/:id', isLogin, getUserById)

router.delete('/users/:id', isLogin, isAdmin, removeUser)

router.put('/users/:id', isLogin, isHim, updateUser)

module.exports = router;