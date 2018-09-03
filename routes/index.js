var express = require('express');
var router = express.Router();
var authentication = require('../middlewares/authentication')
var authorization = require('../middlewares/authorization')
var {signUp,signIn,getUsers,getUserById,deleteUser,updateUser, createUser } = require('../controllers/users')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/users',authentication,authorization,getUsers)
router.get('/api/users/:id',authentication,getUserById)


router.post('/api/signup',signUp)
router.post('/api/signin',signIn)
router.post('/api/users',authentication,authorization,createUser)
router.delete('/api/users/:id',authentication,authorization,deleteUser)
router.put('/api/users/:id',authentication, updateUser)


module.exports = router;
