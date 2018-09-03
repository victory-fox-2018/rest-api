const routes = require('express').Router()
const apiController = require('../controllers/apiController')
const { isLogin , isAdmin } = require('../middleware')

routes.post('/signup', apiController.signup)
routes.post('/signin', apiController.signin)
routes.get('/users', isLogin, isAdmin ,apiController.findAll)
routes.get('/users/:id', isLogin , apiController.getOne)
routes.post('/users', isAdmin , apiController.create)
routes.delete('/users/:id', isAdmin, apiController.remove)
routes.put('/users/:id', isLogin, apiController.update)


module.exports = routes