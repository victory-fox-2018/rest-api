var express = require('express');
var router = express.Router();
const {
  showAllUser,
  showUserById,
  register,
  login,
  updateUser,
  deleteUserData
} = require("../controllers/userController.js");
const isAdmin = require('../middlewares/isAdmin')
const isLogin = require('../middlewares/isLogin')

router.get('/users', isLogin, isAdmin, showAllUser)
router.post('/users', isLogin, isAdmin, register)
router.get('/users/:id', isLogin, showUserById)
router.put('/users/:id', isLogin, updateUser)
router.delete('/users/:id', isLogin, isAdmin, deleteUserData)

router.post('/signup', register)
router.post('/signin', login)

module.exports = router;
