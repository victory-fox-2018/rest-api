const jwt = require('jsonwebtoken');
require('dotenv').config()
const Model = require('../models/index');
const User = Model.User
module.exports={
    isLogin: (req, res, next) => {
        let token = req.headers.token
        if(token){
            let decode = jwt.verify(token, process.env.secretKey)
           User.findOne({where : {username: decode.username}})
           .then((result) => {
               if(result){
                   req.userLogin = result.dataValues
                   next()
               }else{

                   res.status(401).json({
                       msg: "you are not authenticated"
                   })
               }
           })
           .catch((err) => {
            res.status(401).json({
                msg: "you are not authenticated"
            })
           });
        }else{
            res.status(401).json({
                msg: "you are not authenticated"
            })
        }
    }
}