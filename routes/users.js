var express = require('express');
var router = express.Router();

const ControllerUser = require('../controllers/user')
const ControllerAuth = require('../controllers/auth')

/* GET users listing. */
router.post('/signup', ControllerUser.create);

router.post('/signin', ControllerUser.signIn);

router.get('/users', ControllerAuth.adminOnly, ControllerUser.getUser);

router.get('/users/:id', ControllerAuth.adminUser, ControllerUser.getSingleUser);

router.post('/users', ControllerAuth.adminOnly, ControllerUser.create);

router.delete('/users/:id', ControllerAuth.adminOnly, ControllerUser.deleteUser);

router.put('/users/:id', ControllerAuth.adminUser, ControllerUser.updateUser);

module.exports = router;
