const User = require('../models/index').User;
const jwt = require('jsonwebtoken');

const checkId = (req,res,next)=>{
  if(req.params.id===req.decoded.id){
    next();
  }

  else{
    res.status(403).json({
      msg : "you are not able to delete"
    });
  }
};

module.exports = checkId;