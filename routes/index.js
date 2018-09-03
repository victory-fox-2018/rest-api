var express = require('express'),
    router = express.Router(),
    { login, create } = require('../controllers/user'),
    { isLogin } = require('../middlewares/isLogin');

/* GET home page. */
router
    .post('/signup', create)
    
    .post('/login', login)

    .post('/isLogin', isLogin)

module.exports = router;
