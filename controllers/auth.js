const model = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

class Auth{
    static adminOnly(req,res, next){
        // res.json(req.headers.token)
        try {
            let decoded = jwt.verify(req.headers.token, process.env.secretkey)
            if(decoded){
                
                    if(decoded.role === "admin"){
                        next()
                    }else{
                        res
                            .status(401)
                            .json({
                                msg:"Unathorized"
                            })            
                    }
            }
          } catch(err) {
            res.json({
                msg:"Unathorized"
            })
          }
    }

    static adminUser(req,res, next){
        try {
            let decoded = jwt.verify(req.headers.token, process.env.secretkey)
            if(decoded){
                
                    if(decoded.role === "admin" || decoded.id == req.params.id){
                        next()
                    }else{
                        res
                            .status(401)
                            .json({
                                msg:"Unathorized"
                            })            
                    }
            }
          } catch(err) {
            res.json({
                msg:"Unathorized"
            })
          }
    }
}

module.exports = Auth