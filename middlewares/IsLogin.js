'use strict'

const jwt = require('jsonwebtoken');
// const UserController = require('../controllers/UserController')
const Models = require('../models');
const User = Models.User;

function IsLogin(req,res,next) {
    jwt.verify(req.headers.token,process.env.SECRET,(err,decoded)=>{
        if(err){
            res.status(401).json({msg : 'TEST You are not authorized'})
        }else if(decoded){
            // console.log('DECODED', decoded)
            User.findOne({where : {username : decoded.username}})
                .then(row =>{
                    // res.status(200).json({data : row});
                    // let objDecoded = req.decoded
                    // console.log('CEK',row)
                    if(row){
                        req.decoded = decoded;

                        next()    
                    }else{
                        res.status(401).json({
                            msg: 'You are not authorized'                            
                        })
                    }
                    
                })
                .catch(err =>{
                    res.status(500).json({msg : err});
                })

        }
    });
}

module.exports = IsLogin