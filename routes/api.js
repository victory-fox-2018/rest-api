const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

const isLogin = require('../middlewares/isLogin')
const isAdmin = require('../middlewares/isAdmin')

router.post('/signup', (req, res) => {
  userController.signUp(req, res)
})

router.post('/signin', (req, res) => {
  userController.signIn(req, res)
})

router.get('/users', isLogin, isAdmin, (req, res) => {
  userController.showAll(req, res)
})

router.get('/users/:id', isLogin, (req, res) => {
  userController.showOne(req, res)
})

router.post('/users', isLogin, isAdmin, (req, res) => {
  userController.add(req, res)
})

router.put('/users/:id', isLogin, (req, res) => {
  userController.edit(req, res)
})

router.delete('/users/:id', isLogin, isAdmin, (req, res) => {
  userController.destroy(req, res)
})

router.get('/users', isLogin)

module.exports = router;