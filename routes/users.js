var express = require('express');
var router = express.Router();

const UserController = require('../controllers/UserController');
const IsLogin = require('../middlewares/IsLogin');
const IsAdmin = require('../middlewares/IsAdmin');

/* GET users listing. */

// get all user data
router.get('/users', IsLogin,(req, res, next) => {
  // res.send('respond with a resource');
  UserController.findUserAll(req,res)
});

// create user data
router.post('/users',IsLogin,IsAdmin,(req,res,next)=>{
  // res.status(200).json({user: req.body})
  UserController.createUser(req,res)
})

// sign up
router.post('/signup',(req,res,next)=> {
    UserController.signUp(req,res);
})

// sign in
router.post('/signin',(req,res,next)=> {
  UserController.signIn(req,res);
})

module.exports = router;
