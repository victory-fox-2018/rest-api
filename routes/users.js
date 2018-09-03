var express = require('express'),
    router = express.Router(),
    { create, list } = require('../controllers/user'),
    { isAdmin } = require('../middlewares/isAdmin'),
    { isLogin } = require('../middlewares/isLogin');

/* GET users listing. */
router
    .get('/', isLogin, isAdmin, list)
    .post('/', isLogin, isAdmin, create)

module.exports = router;
