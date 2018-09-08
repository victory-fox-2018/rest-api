const register = require('express').Router()
const controller = require('../controller/register')

register.post('/', controller.signup.post)
module.exports = register
