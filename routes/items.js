const items = require('express').Router()
const controller = require('../controller/items')
const isLogin = require('../middleware/isLogin')

items.get('/', controller.all.get)
items.post('/', isLogin,controller.all.post)

module.exports = items