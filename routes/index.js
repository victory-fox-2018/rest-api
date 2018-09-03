'use strict'
require('dotenv').config()
const express = require('express')
const router = express.Router()
const users = require('./users')


router.use('/api', users)

router.get('/', function(req, res){
    res.redirect('/api')
})

module.exports = router