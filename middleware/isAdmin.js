const User = require('../models/index').User;
const jwt = require('jsonwebtoken');

const isAdmin = (req,res,next)=>{
  if(req.decoded.role==="admin"){
    next();
  }

  else{
    res.status(403).json({
      msg : "you are not an admin"
    });
  }
};

module.exports = isAdmin;