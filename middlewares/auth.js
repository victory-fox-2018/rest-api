const jwt = require("jsonwebtoken");
const Model = require('../models')
const User = Model.User

module.exports = {
    isLogin: function(req, res, next) {
        let token = req.headers.token
        let decode = jwt.verify(token, process.env.JWT_SECRET)

        if(token){
            User.findOne({where: {email: decode.email}})
            .then((data) => {
                if(data){
                    req.loggedInUser = data
                    next()
                }else{
                    res.status(400).json({
                        message: err.message
                    })
                }
            }).catch((err) => {
                res.status(400).json({
                    message: 'User must be Log In'
                })
            });
            
        }else{
            res.status(400).json({
                msg: 'User must be Log In'
            })
        }
    },

    isAdmin: function(req, res, next) {
        if(req.loggedInUser.role === 'admin'){
            next()
        }else{
            res.status(401).json({
                msg: 'Only Admin'
            })
        }
    }
}