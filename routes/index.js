const routes = require('express')()
const items = require('./items')
const users = require('./users')
const signup = require('./signup')
const signin = require('./signin')


routes.use('/items',items)
routes.use('/users',users)
routes.use('/signup',signup)
routes.use('/signin',signin)

module.exports = routes
