'use strict'
require('dotenv').config()
const express = require('express')
const router = express.Router()
const userController = require('./../controllers/userController')
const isLogin = require('../middlewares/isLogin')
const isAdmin = require('../middlewares/isAdmin')


router.post('/signup', userController.signUp)
router.post('/signin', userController.signIn)
router.get('/users',isLogin,isAdmin, userController.findAll)
router.get('/users/:id',isLogin, userController.findOne)



module.exports = router 