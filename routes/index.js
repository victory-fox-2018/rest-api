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
const authorization = require('../middlewares/authorization')
const isLogin = require('../middlewares/isLogin')

router.get('/users', authorization, showAllUser)
router.post('/users', authorization, register)
router.get('/users/:id', isLogin, showUserById)
router.put('/users/:id', isLogin, updateUser)
router.delete('/users/:id', authorization, deleteUserData)

router.post('/signup', register)
router.post('/signin', login)

module.exports = router;
