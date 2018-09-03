'use strict'

const Models = require('../models');
const User = Models.User;
var jwt = require('jsonwebtoken');
const HashPassword = require('../helpers/HashPassword')

class UserController{

    //sign up
    static signUp(req,res){
        User.create({name : req.body['name'], username: req.body['username'],
                        password: req.body['password'], role: req.body['role'] })
                .then(row=>{
                    res.status(200).json({msg : 'Sign Up Success'});
                })
                .catch(err =>{
                    res.status(500).json({msg : err});
                })
    }

    // sign in
    static signIn(req,res){
        let hash = HashPassword(req.body['password'])
        User.findOne({where : {username : req.body['username'], password : hash}})
            .then(row =>{
                // console.log('--------')
                // console.log('TEST',row['dataValues']['role'])
                // res.status(200).json({data : row});
                if(row){
                    jwt.sign({
                        id : row['dataValues']['id'],
                        username : req.body['username'],
                        password : req.body['password'],
                        role : row['dataValues']['role']          
                    },'rahasia',(err,token)=>{
                        if(err){
                            res.status(500).json({msg : err.message})
                        }else if(token){
                            res.status(200).json({
                                msg: 'Signin success',
                                token : token
                            })
                        }
                    })
                }
            })
            .catch(err =>{
                res.status(500).json({msg : err});
            })
    }

    // create user for admin
    static createUser(req,res){
        
        User.create({name: req.body['name'], username: req.body['username'],
                        password: req.body['password'], role: req.body['role'] })
             .then(row =>{
                res.status(200).json({msg: 'Create Data Success'});
             })
             .catch(err =>{
                res.status(500).json({msg: err});
             })           
    }

    // find all user for admin
    static findUserAll(req,res){

        User.findAll()
            .then(rows=>{
                // console.log('TEST',rows);
                // res.send(rows)
                res.status(200).json({users : rows})
            })
            .catch(err =>{
                // console.log('TEST',err);
                res.status(500).json({msg:err})
            })

    }

    static findUserById(req,res,inputId){
        // console.log('TEST',inputId)
        User.findById(inputId)
            .then(row =>{
                res.status(200).json({user : row});
            })
            .catch(err=>{
                res.status(500).json({msg : err});
            })
    }

    static deleteById(req,res,inputId){
        User.destroy({where : {id : inputId}})
            .then(row =>{
                res.status(200).json({msg: `Data with ID ${inputId} has been deleted`});
            })
            .catch(err =>{
                res.status(500).json({msg : err});
            })
    }

    static updateById(req,res,inputId){
        let hash = HashPassword(req.body['password'])
        // console.log('------------')
        // console.log('TEST')
        User.update({name : req.body['name'], username : req.body['username'],
                        password : hash ,updatedAt : new Date()},{where : {id : inputId}})
            .then(row =>{
                res.status(200).json({msg : `Data with ID ${inputId} has been updated`})
            })  
            .catch(err =>{
                res.status(500).json({msg : err});
            })          
    }
}

module.exports = UserController