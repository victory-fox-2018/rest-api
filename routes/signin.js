const register = require('express').Router()
const controller = require('../controller/register')

register.post('/', controller.signin.post)
module.exports = register
