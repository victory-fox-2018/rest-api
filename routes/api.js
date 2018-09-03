var express = require('express');
var router = express.Router();
const { signup, signin, getAllUsers, getOneUser, createUser, deleteUser, updateUser} = require('../controllers/userController')
const isLogin = require('../middlewares/isLogin')
const isAdmin = require('../middlewares/isAdmin')
const isLoginUser = require('../middlewares/isLoginUser')

/* GET users listing. */
router.post('/signup',signup)

router.post('/signin',signin)

router.get('/users',isLogin,isAdmin,getAllUsers)

router.get('/users/:id',isLogin,isLoginUser,getOneUser)

router.post('/users',isLogin,isAdmin,createUser)

router.delete('/users/:id',isLogin,isAdmin,deleteUser)

router.put('/users/:id',isLogin,isLoginUser,updateUser)

module.exports = router;
