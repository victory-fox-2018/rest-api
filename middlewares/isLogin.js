const jwt = require('jsonwebtoken');
const model = require('./../models').User


function isLogin(req,res,next){
    jwt.verify(req.headers.token, process.env.JWT_SECRET, function(err, decoded) {
        model.findOne({
            where :{
                userName : decoded.userName,
                password : decoded.password
            }
        })
        .then(data=>{
            if(data!==null||data!==undefined){
                req.decoded = decoded;
                next();
            }
            else{
                res.status(204).json({
                    msg : "Not yet login"
                })
            }
            
        })
    });
}

module.exports = isLogin;