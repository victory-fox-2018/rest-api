const {User} = require('../models')
const jwt = require('jsonwebtoken')
require('dotenv').config()

function isLogin (req,res,next) {
    const token = req.headers.token
    if(token) {
        jwt.verify(token,process.env.JWT_SECRET_KEY,function(err,decoded){
            if (err) {
                res.status(500).json({
                    mesage: err
                })
            } else {
                User.findOne({
                    where: {
                        email: decoded.email
                    }
                })
                .then(function(data){
                    req.decoded = decoded
                    next()
                })
                .catch(function(err){
                    res.status(500).json({
                        mesage: err
                    })
                })
            }
        })
    } else {
        res.status(500).json({
            message : 'token must be provided'
        })
    }
    
}

module.exports = isLogin