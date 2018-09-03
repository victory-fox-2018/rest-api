const { User } = require('../models')
const jwt      = require('jsonwebtoken');

module.exports = {
    isLogin: function(req,res,next){ //Authentication
        var token = req.headers.token;
        if(token){
            jwt.verify(token, process.env.KEY_HARLES , function(err, decoded) {

                User.findOne({ where : {email : decoded.email} })
                    .then( user => {
                        req.loggedInRoleUser = user.role
                        next()
                    })
                    .catch( err => {
                        res.status(500).json({
                            error : err.message
                        })
                    })
            });
        } else {
            res.status(500).json({
                error : `invalid token`
            })
        }
        
    },

    isAdmin: function(req,res,next){

        if(req.loggedInRoleUser == "admin"){
            next()
        } else {
            res.status(500).json({
                error : `Only admin`
            })
        }
    
    }
}