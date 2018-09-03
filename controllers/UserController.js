'use strict'

const Models = require('../models');
const User = Models.User;

class UserController{
    static createUser(req,res){
        
        User.create({name: req.body['name'], username: req.body['username'],
                        password: req.body['password'], role: req.body['role'] })
             .then(row =>{
                res.status(200).json({msg: 'Create Data Success'})
             })
             .catch(err =>{
                res.status(500).json({msg: err});
             })           
    }

    static findUserAll(req,res){

        User.findAll()
            .then(rows=>{
                // console.log('TEST',rows);
                // res.send(rows)
                res.status(200).json({users : rows})
            })
            .catch(err =>{
                // console.log('TEST',err);
                res.status(500).json({users:err})
            })

    }
}

module.exports = UserController