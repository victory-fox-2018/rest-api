const User = require('../models')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const authorization = function(req,res,next){
    let token = req.headers.token
    if(token){
        let decode = jwt.verify(token, process.env.JWT_KEY)
        console.log(decode);
        if(decode.role == "admin"){
            next()
        }else{
            res.status(400).json({message:"you are forbidden to access this page"})
        }
    }
}

module.exports = authorization