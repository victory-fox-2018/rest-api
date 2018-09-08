const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const isLogin = require('../middleware/isLogin');
const isAdmin = require('../middleware/isAdmin');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/users', isLogin, isAdmin, userController.listAll);
router.get('/users/:id', isLogin, userController.findById);

router.post('/users', isLogin, isAdmin, userController.create);
router.post('/signin', userController.signin);
router.post('/signup', userController.signup);

router.put('/users/:id', isLogin, userController.update);

router.delete('/users/:id', isLogin, isAdmin, userController.remove);

module.exports = router;
