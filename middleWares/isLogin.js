const jwt = require('jsonwebtoken')
const User = require('../models').User

const isLogin = (req,res,next) => {
    
    if (req.headers.token) {
        jwt.verify(req.headers.token, process.env.SECRET, (err, decoded) => {
            
            if (decoded) {
                User.findAll({
                    where: {
                        firstName : decoded.firstName,
                        password : decoded.password
                    }
                },{
                    raw:true
                })
                .then(data => {
                    if (data.length > 0) {
                        req.decoded = decoded
                        
                        next()
                    } else {
                        res.status(403).json({
                            message:"You don't have access to use this feature"
                        })
                    }
                })  
                .catch(err => {
                    res.status(500).json({
                        message : "Error when validate you account"        
                    })    
                })              
            } else {
                    res.status(500).json({
                    message : "Error when validate you account"        
                })
            }
        })
    } else {
        res.status(401).json({
            message : "You need to login first"
        })
    }
}

module.exports = isLogin