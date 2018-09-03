
const Model = require('../models')
const Users = Model.User
jwt = require('jsonwebtoken')

function isAdmin(req,res,next){  
   if(req.user.role == false){              
       res.status(400).json({
           msg : 'only admin'
       })
       
   }
   else{             
      next()                   
   }
}

module.exports = isAdmin