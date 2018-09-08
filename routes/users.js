var express = require('express'),
    router = express.Router(),
    { create, list, listOne, update, remove } = require('../controllers/user'),
    { isAdmin } = require('../middlewares/isAdmin'),
    { isLogin } = require('../middlewares/isLogin');

/* GET users listing. */
router
    .get('/', isLogin, isAdmin, list)
    
    .post('/', isLogin, isAdmin, create)

    .get('/:id', isLogin, listOne)

    .put('/:id', isLogin, update)

    .delete('/:id', isLogin, isAdmin, remove)

module.exports = router;
