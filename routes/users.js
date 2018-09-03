var express = require('express');
var router = express.Router();
const{ isLogin, isAdmin } = require('../middlewares/auth')
const { signup, signin, getAll, getOne, createUser, updateUser, deleteUser } = require('../controllers/userController')

/* GET users listing. */
router.post('/signin', signin);
router.post('/signup', signup);
router.get('/', isLogin, isAdmin, getAll);
router.get('/:id', isLogin, getOne);
router.post('/', isLogin, isAdmin, createUser)
router.delete('/:id', isLogin, isAdmin, deleteUser);
router.put('/:id', isLogin, updateUser);

module.exports = router;
