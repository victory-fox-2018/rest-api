// require('dotenv').config()
const User = require('../models').User
const jwt = require('jsonwebtoken')
const passEncryptor = require('../middleWares/passEncryptor')

class ControllerUser {

    static signIn(req, res) {
        let obj = {
            where : {
                username : req.body.username,
            }
        }
        User.findOne(obj,{
            raw:true
        })
        .then(userData => {
            if (Object.keys(userData).length > 0) {
                
                if (bcrypt.compareSync(req.body.password, userData.password)) {
                    jwt.sign({
                        firstName : userData.firstName,
                        username  : userData.username,
                        password  : userData.password,
                        role      : userData.role
                    },process.env.SECRET, (err , token ) => {
                        if (!err) {
                            res.status(202).json({
                                message : {
                                    task : 'Login success'
                                }, 
                                dataUser : {
                                    firstName : userData.firstName,
                                    token : token
                                } 
                            })
                        } else {
                            res.status(417).json({
                                message : {
                                    task : 'Error when generate token'
                                }
                            })
                        }
                    })
                } else {
                    res.status(404).json({
                        message : {
                            task : 'username and password wrong'
                        }
                    })
                }
            } else {
                res.status(404).json({
                    message : {
                        task : 'username and password wrong'
                    }
                })
            }
        })
        .catch(err => {
            res.status().json({
                err : "Error when reading database"
            })
        })
    }

    static signUp(req,res) {

        let obj = {
            firstName : req.body.firstName,
            lastName  : req.body.lastName,
            email     : req.body.email,
            username  : req.body.username,
            password  : passEncryptor(`${req.body.password} ${req.body.username}`),
            role  : req.body.role
        }    
        User.create(
            obj
        )
        .then(user => {
            
            res.status(201).json({
                message: {
                    task : "Creating user is success!"
                },
                dataUser : obj
            })
        })
        .catch(err => {
            res.status(417).json({
                err : "Error when creating user"
            })
        })
    }

    static allUser(req, res) {
        
        User.findAll({
            raw:true
        })
        .then(userDatas => {
            res.status(200).json(userDatas)
        })
        .catch(err => {
            res.status(417).json({
                err : "Error when creating user"
            })
        })
    }

    static findOne(req, res) {
        User.findAll({
            where : {
                id : req.params.id
            }
        },{
            raw:true
        })
        .then(user => {
            if (user.length == 1) {
                res.status(200).json(user[0])
            } else {
                res.status(204).json({
                    message: 'User not found'
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message : 'error when reading data'
            })
        })
    }

    static createUser(req,res) {

        let obj = {
            firstName : req.body.firstName,
            lastName  : req.body.lastName,
            email     : req.body.email,
            username  : req.body.username,
            password  : req.body.password,
            role      : req.body.role
        }
        User.create(obj)
        .then(user => {
            res.status(201).json({
                message : 'creating user is complete'
            })
        })
        .catch(err => {
            res.status(500).json({
                message : 'error when creating data'
            })
        })
    }

    static deleteUser(req, res) {

        User.destroy({
            where: {
                id : req.params.id
            }
        })
        .then(user => {
            res.status(200).json({
                message : 'deleting user is complete'
            })
        })
        .catch(err => {
            res.status(500).json({
                message : 'error when deleting data'
            })
        })
    }
}

module.exports = ControllerUser