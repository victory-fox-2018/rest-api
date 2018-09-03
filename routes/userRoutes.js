const router = require('express').Router()
const isLogin  = require('../middlewares/isLogin')
const isAdmin  = require('../middlewares/isAdmin')

const { signupUser, signinUser, getAllUsers, getUser, createUser, deleteUser, updateUser } = require('../controllers/userController')

router.post('/signup', signupUser)
router.post('/signin', signinUser)
router.get('/users', isLogin, isAdmin, getAllUsers)
router.get('/users/:id', isLogin, getUser)
router.post('/users', isLogin, isAdmin, createUser)
router.delete('/users/:id', isLogin, isAdmin, deleteUser)
router.put('/users/:id', isLogin, updateUser)

module.exports = router