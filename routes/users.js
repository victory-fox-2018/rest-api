var express = require('express');
var router = express.Router();
const {isLogin} = require('../middlewares/isLogin');
const {isAdmin} = require('../middlewares/isAdmin');
const {getAll, create, update, remove, signup, signin, getOne} = require('../controllers/userController');
/* GET users listing. */
router.get('/',isLogin,isAdmin, getAll)
      .get('/:id',isLogin, getOne)
      .post('/',isLogin, isAdmin, create)
      .put('/:id', isLogin, update)
      .delete('/:id',isLogin, isAdmin, remove)
      .post('/signup', signup)
      .post('/signin',signin)
module.exports = router;
