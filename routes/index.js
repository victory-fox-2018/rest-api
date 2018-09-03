var express = require('express');
var router = express.Router();
var { signUp, getAll, getOne, login, create, remove, update } = require('../controllers/apiController');
var { authentication, isAdmin, itSelf } = require('../middleware')

router.post('/signup', signUp);
router.post('/signin', login);
router.get('/users', authentication, isAdmin, getAll);
router.get('/users/:id', authentication, getOne);
router.post('/users', authentication, isAdmin, create)
router.delete('/users/:id', authentication, isAdmin, remove)
router.put('/users/:id', authentication, itSelf, update)

module.exports = router;