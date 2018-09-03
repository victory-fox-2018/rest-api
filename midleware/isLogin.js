const User = require('../models/').User;
const jwt = require('jsonwebtoken');

module.exports = {
  isLogin: (req, res, next) => {
    const token = req.headers.token;
    const decode = jwt.verify(token, 'shhh');

    if(token) {
      User
        .findOne({where: {
          username: decode.username,
          role: decode.role
        }})
        .then(user => {
          if(user) {
            next();
          } else {
            res.status(400).json({
              message: 'Something went wrong!!'
            })
          }
        })
    } else {
      res.status(400).json({
        message: 'There is no token!!'
      });
    }
  }

};