const User = require('../models/').User;
const jwt = require('jsonwebtoken');

module.exports = {
  isAdmin: (req, res, next) => {
    const token = req.headers.token;
    const decode = jwt.verify(token, 'shhh')

    if(decode.role === 'Admin') {
      next();
    } else {
      res.status(400).json({
        message: 'You do not have access to this action!!'
      });
    }
  }

};