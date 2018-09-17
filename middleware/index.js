const jwt = require(`jsonwebtoken`)
const Model = require('../models/')
const User = Model.User

module.exports = {
    authentication: function(req,res,next){
        var token = req.headers.token
        if(token){
            jwt.verify(token, process.env.SECRET, function(err, decoded){
                if(err){
                    res.status(500).json({
                        message: err.message
                    })
                }else{
                    var dataDecoded = {
                        id: decoded.id,
                        email: decoded.email,
                        firstName: decoded.firstName,
                        lastName: decoded.lastName,
                        role: decoded.role
                    }
                    User.findOne({ where: dataDecoded })
                        .then(user =>{
                            if(user){
                                req.decoded = decoded
                                next()
                            }else{
                                res.status(500).json({
                                    message: `INVALID TOKEN`
                                })
                            }
                        })
                        .catch(err =>{
                            res.status(500).json({
                                message: err.message
                            })
                        })
                }
            })
        }else{
            res.status(404).json({
                message: `Login First`
            })
        }
    },

    isAdmin: function(req,res,next){
        let role = req.decoded.role
        
        if(role === 'admin'){
            next()
        }else{
            res.status(403).json({
                message: `Not Have Permission`
            })
        }
    },

    itSelf: function(req,res,next){
        let id = Number(req.params.id)
        let idLogin = Number(req.decoded.id)

        if(id === idLogin){
            next()
        }else{
            res.status(403).json({
                message: `You Not Have Access`
            })
        }
    }
}