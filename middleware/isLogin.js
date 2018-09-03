const Model = require('../models')
const Users = Model.User
jwt = require('jsonwebtoken')
require('dotenv').config()

function isLogin (req,res,next){
    let token = req.headers.token
    if(token){
        jwt.verify(token,process.env.JWT,(err,decoded)=>{
            Users.findOne({where:{
                id : decoded.id
            }})
            .then(user =>{
                req.user = {id :decoded.id , role : user.admin}
                next()
                               
            })
            .catch(err =>{
                res.status(400).json({err,msg:'you are not authorized'})
                
            })
            
        })
        //User.findOne({})
    }
    else{
        res.status(500).json({
            msg : 'you are not authenticated'
        })
    }
    
}

module.exports = isLogin