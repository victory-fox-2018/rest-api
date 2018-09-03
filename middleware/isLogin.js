const { User } = require('../models')
var jwt = require('jsonwebtoken')

module.exports = {
  isLogin: (req, res, next) => {
    jwt.verify(req.headers.token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(500).json({error: err})
      } else {
        User.findOne({
          where: { username: decoded.username}
        })
          .then(data => {
            if (data) {
              req.decoded = decoded
              next()
            } else {
              res.status(401).json({message: 'You are not allowed!'})
            }
          })
          .catch(err => {
            res.status(500).json({error: err})
          })
      }
    })
  }
}