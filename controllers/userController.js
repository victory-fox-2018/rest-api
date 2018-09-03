const Model = require('../models/index');
const User = Model.User
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
var jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports = {
    signup: (req, res) => {
        const {name, username,password} = req.body
        User.create({
            name: name,
            username: username,
            password : password,
            role: 'user'
        })
        .then((result) => {
            res.status(200).json({
                msg: 'register succes',
                result
            })
        })
        .catch((err) => {
            res.status(400).json(err)
        });
    },
    signin: (req, res) => {
        User.findOne({where: {username: req.body.username}})
        .then((result) => {
           if(result){
               let encrypted = bcrypt.compareSync(req.body.password, result.password)
               if(encrypted){
                let token = jwt.sign({
                    id: result.id,
                    username: result.username,
                    role: result.role
                }, process.env.secretKey)
                   res.status(200).json({
                       msg: 'login succes',
                       token
                   })
               }else{
                   res.status(400).json({
                       msg: 'login failed, password wrong'
                   })
   
               }
           }else{
               res.status(400).json({msg : 'username not found'})
           }

        })
        .catch((err) => {
            res.status(400).json(err)
        });
    },
    getAll: (req, res) => {
        User.findAll()
        .then((result) => {
            res.status(200).json({
                result
            })
        })
        .catch((err) => {
            res.status(400).json({
                msg: err
            })
        });
    },
    getOne: (req, res) => {
        User.findOne({where: {id: req.params.id}})
        .then((result) => {
            if(result){
                res.status(200).json(result)
            }else{
                res.status(200).json({msg : 'data not found'})
            }
        })
        .catch((err) => {
            res.status(400).json(err)
        });
    },
    create: (req, res) => {
        User.create({
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
            role: req.body.role
        })
        .then((result) => {
            res.status(201).json(result)
        })
        .catch((err) => {
            res.status(400).json(err)
        });
    },
    update: (req, res) => {
        User.update({
            name: req.body.name
        }, {
           where:{ id: req.params.id}      
        })
        .then((result) => {
            if(result[0] !== 0){
                res.status(201).json({result, msg: 'update succes'})
            }else{
                res.status(201).json({msg: 'data not found'})
            }
        })
        .catch((err) => {
            res.status(400).json(err)
        });
    },
    remove: (req, res) => {
        User.destroy({where: {id : req.params.id}})
        .then((result) => {
            if(result){
                res.status(201).json({
                    msg: 'delete succes',
                    result
                })
            }else{
                res.status(201).json({
                    msg: 'data not found',
                })
            }
        })
        .catch((err) => {
            res.status(400).json(err)
        });
    },
    
    

};
