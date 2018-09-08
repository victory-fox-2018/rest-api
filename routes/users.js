const users = require('express').Router()
const controller = require('../controller/users')
const admin = require('../middleware/isAdmin')
const isLogin = require('../middleware/isLogin')

users.get('/', controller.all.get) 
users.get('/:id', controller.findUser.get) //dirisendir
users.post('/add', isLogin,admin,controller.add.post) 
users.put('/:id/edit', isLogin,admin,controller.update.put) //dirisendir
users.patch('/:id/edit', isLogin,admin,controller.update.patch) //patch
users.delete('/:id/delete',isLogin,admin, controller.delete.remove) 

module.exports = users