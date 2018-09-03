var express = require('express');
var router = express.Router();

const UserController = require('../controllers/UserController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  UserController.findUserAll(req,res)
});

router.post('/',function(req,res,next){
  // res.status(200).json({user: req.body})
  UserController.createUser(req,res)
})

module.exports = router;
