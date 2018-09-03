require('dotenv').config();

const jwt = require('jsonwebtoken');
const User = require('../models/').User;

const isLogin = (req, res, next) => {
  let token = req.headers.token;

  if(!token) {
    res.status(401).json({
      message: 'Token is null'
    });
  }

  jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    let input = {
      username: decoded.username,
      role: decoded.role
    };

    User.findOne({
      where: input
    }).then(user => {
        req.decoded = decoded;
        next();
      })
      .catch(err => {
        res.status(401).json({
          message: err
        });
      });
    
  });
};

module.exports = isLogin;