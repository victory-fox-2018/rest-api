var express = require('express');
var router = express.Router();
const{ isLogin, isAdmin } = require('../middlewares/auth')
const { getAll, getOne, createUser, updateUser, deleteUser } = require('../controllers/userController')

/* GET users listing. */
router.post('/', isLogin, isAdmin, createUser)
router.get('/', isLogin, isAdmin, getAll);
router.get('/:id', isLogin, getOne);
router.put('/:id', isLogin, isAdmin, updateUser);
router.delete('/:id', isLogin, isAdmin, deleteUser);

module.exports = router;
