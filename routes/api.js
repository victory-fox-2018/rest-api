var express = require('express');
var router = express.Router();
const { signup, signin, getAllUsers, getOneUser, createUser, deleteUser} = require('../controllers/userController')
const isLogin = require('../middlewares/isLogin')
const isAdmin = require('../middlewares/isAdmin')

/* GET users listing. */
router.post('/signup',signup)

router.post('/signin',signin)

router.get('/users',isLogin,isAdmin,getAllUsers)

router.get('/users/:id',isLogin,getOneUser)

router.post('/users',isLogin,isAdmin,createUser)

router.delete('/users/:id',isLogin,isAdmin,deleteUser)

module.exports = router;
