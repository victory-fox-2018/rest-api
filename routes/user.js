const routes = require('express').Router()
const ControllerUser = require('../controller/controllerUser')
const isLogin = require('../middleWares/isLogin')
const isAdmin = require('../middleWares/isAdmin')

routes.post('/signup',ControllerUser.signUp)
routes.post('/signin',ControllerUser.signIn)
routes.post('/users',isLogin,isAdmin,ControllerUser.createUser)
routes.get('/users',isLogin,isAdmin,ControllerUser.allUser)
routes.delete('/users/:id',isLogin,isAdmin,ControllerUser.deleteUser)
routes.get('/users/:id',isLogin,ControllerUser.findOne)

module.exports = routes