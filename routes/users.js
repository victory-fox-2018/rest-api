var express = require('express');
var router = express.Router();

const UserController = require('../controllers/UserController');
const IsLogin = require('../middlewares/IsLogin');
const IsAdmin = require('../middlewares/IsAdmin');
const IsAuthorized = require('../middlewares/IsAuthorized');

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

// get individual data
router.get('/users/:id',IsLogin,IsAuthorized,(req,res,next)=>{

  UserController.findUserById(req,res,req.params.id)
})

// delete individual data
router.delete('/users/:id',IsLogin,IsAdmin,(req,res,next)=>{
  UserController.deleteById(req,res,req.params.id)
})

// update individual data
router.put('/users/:id',IsLogin,IsAuthorized,(req,res,next)=>{
  // console.log('TEST Controller-------')

  UserController.updateById(req,res,req.params.id);
})

module.exports = router;
