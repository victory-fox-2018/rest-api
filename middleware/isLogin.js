const User = require('../models/index').User;
const jwt = require('jsonwebtoken');

const isLogin = (req,res,next)=>{
  jwt.verify(req.headers.token, process.env.JWT_SECRET, function(err, decoded) {
    if(!err){
      User.findOne({
        where : {
          email : decoded.email
        }
      })

      .then(user=>{
        if(user !== undefined || user !== null){      req.decoded = decoded;
          req.decoded = decoded;
          next();
        }
        else{
          res.status(401).json({
            msg : "you are not authorized"
          });
        }
      })

      .catch(err=>{
        console.log(error);
        res.status(500).json({
          msg : err
        });
      });
    }

    else{
      res.status(401).json({
        msg : "you are not authorized"
      });
    }
  });
};

module.exports = isLogin;