var express = require('express');
var router = express.Router();
var Controller = require('../Controller/userController')
// var checkAdmin = require('../middlewares/checkAdmin')
var checkLogin = require('../middlewares/checkLogin')
// var checkLoginUser
// router.get('/api', Controller.sign);

router.post('/signup', Controller.signUp)
router.post('/signin', Controller.signIn)
router.get('/', checkLogin, Controller.findAll)
// router.get('/user/:id', Controller.userInfo)
// router.post('/admin', checkLogin, checkAdmin, Controller.createAdmin)
// router.delete('/admin/:id', Controller.deleteUser)
// router.put('/userupdate/:id', Controller.updateUser)

module.exports = router;
