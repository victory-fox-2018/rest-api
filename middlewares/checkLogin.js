const { UserData } = require('../models')
const jwt = require('jsonwebtoken')

function checkLogin(req, res, next) {
  // console.log('asas');
  const token = req.headers.token

  if(token) {
    jwt.verify(token, process.env.JWT_SECRET_KEY, function(err, decoded) {
      console.log(decoded);
      if (err) {
        res.status(500).json({
          message: err
        })
      } else {
        UserData.findOne({
          where: {
            // username: decoded.username,
            email: decoded.email
          }
        })
        .then(function(data) {
          req.decoded = decoded
          next()
        })
        .catch(function(err) {
          res.status(500).json({
            message:err
          })
        })
      }
    })
  } else {
    res.status(500).json({
      message: 'token should be provided'
    })
  }
}

module.exports = checkLogin
