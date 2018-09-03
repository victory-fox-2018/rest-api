'use strict'

const jwt = require('jsonwebtoken');
// const UserController = require('../controllers/UserController')
const Models = require('../models');
const User = Models.User;

function IsLogin(req,res,next) {
    jwt.verify(req.headers.token,process.env.SECRET,(err,decoded)=>{
        if(err){
            res.status(500).json({msg : err})
        }else if(decoded){
            User.findOne({where : {username : decoded.username, password : decoded.password}})
                .then(row =>{
                    // res.status(200).json({data : row});
                    // let objDecoded = req.decoded
                    req.decoded = decoded;

                    next()
                })
                .catch(err =>{
                    res.status(500).json({msg : err});
                })

        }
    });
}

module.exports = IsLogin