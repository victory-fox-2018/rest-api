const jwt = require('jsonwebtoken');

function isLogin(req,res,next) {
  let token = req.headers.token;
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      res.status(401).json({
        message: 'you are not logged in!'
      })
    } else {
      req.decoded = decoded;
      next();
    }
  })
}

module.exports = isLogin;