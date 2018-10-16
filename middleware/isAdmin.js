const { User } = require('../models')
var jwt = require('jsonwebtoken')

module.exports = {
  isAdmin: (req, res, next) => {
    if(req.decoded.role === 'admin') {
      next()
    }else {
      res.status(403).json({message: 'You are not allowed!'})
    }
  }
}