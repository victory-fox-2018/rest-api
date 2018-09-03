const router = require('express').Router();
const { findAll,findOne,remove,create,update,signIn } = require('../controller/userController');
const isLogin = require('../middleware/isLogin');
const isAdmin = require('../middleware/isLogin');


//Admin Only
//see all
router.get('/',isLogin,isAdmin,findAll);

//delete user
router.delete('/:id',isLogin,isAdmin,remove);

//create new user
router.post('/',isLogin,isAdmin,create);

//update
router.put('/:id',isLogin,update);

//find one
router.get('/:id',isLogin,findOne);

router.post('/signup',create);
router.post('/signin',signIn);


module.exports = router;