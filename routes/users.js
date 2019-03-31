var express = require('express');
var router = express.Router();
const { findAll, findOne, register, erase, edit } = require('../controller/userController');
const isLogin = require('../middleware/isLogin');
const isAdmin = require('../middleware/isAdmin');
const isAdminOrAuthUser = require('../middleware/isAdminOrAuthUser');

/* GET users listing. */
router.get('/', isLogin, isAdmin, findAll);
router.get('/:id', isLogin, findOne);
router.post('/', isLogin, isAdmin, register);
router.delete('/:id', isLogin, isAdmin, erase);
router.put('/:id', isLogin, isAdminOrAuthUser, edit)

module.exports = router;
