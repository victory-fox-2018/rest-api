const { User } = require('../models')
const jwt = require('jsonwebtoken')
const hashPassword = require('../helpers/hashPassword')

module.exports = {
    signupUser: (req, res) => {
        const defaultRole = 'member'
        User
            .create({
                name: req.body.name,
                email: req.body.email,
                password: hashPassword(req.body.password),
                role: req.body.role === '' ? defaultRole : 'admin'
            })
            .then(userRegistered => {
                res.status(200).json({
                    message: 'user register successfully',
                    data: userRegistered
                })
            })
            .catch(err => {
                res.status(500).json({err: err.message})
            })
    },
    signinUser: (req, res) => {
        User
            .findOne({
                where:{
                    email: req.body.email,
                    password: hashPassword(req.body.password)
                }
            })
            .then(user => {
                if (user){
                    var token = jwt.sign({
                        id: user.id,
                        email: user.email,
                        role : user.role
                    }, process.env.secretkey)

                    res.status(200).json({
                        message: 'login successfully',
                        token: token
                    })
                }else {
                    res.status(404).json('email & password not found')
                }
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
    },
    getAllUsers: (req, res) => {
        User
            .findAll({
                where:{
                    role: 'member'
                }
            })
            .then(users => {
                res.status(200).json({
                    message: 'display all users(member) successfully',
                    data: users
                })
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
    },
    getUser: (req, res) => {
        User
            .findById(req.params.id)
            .then(user => {
                res.status(200).json({
                    message: 'display user successfully',
                    data: user
                })
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
    },
    createUser: (req, res) => {
        User
            .create({
                name: req.body.name,
                email: req.body.email,
                password: hashPassword(req.body.password),
                role: 'member'
            })
            .then(userRegistered => {
                res.status(200).json({
                    message: 'user register successfully',
                    data: userRegistered
                })
            })
            .catch(err => {
                res.status(500).json({err: err.message})
            })
    },
    deleteUser: (req, res) => {
        User
            .destroy({
                where:{
                    id: req.params.id
                }
            })
            .then(() => {
                res.status(200).json({
                    message: 'user deleted successfully',
                })
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
    },
    updateUser: (req, res) =>{
        User
            .findById(req.params.id)
            .then(user => {
                if(user.length > 0){
                    res.status(404).json('id not found')
                }else {
                    User
                        .update({
                            name: req.body.name,
                            email: req.body.email,
                            password: hashPassword(req.body.password)
                        },{
                            where:{
                                id: req.params.id
                            }
                        })
                        .then(() => {
                            res.status(200).json({
                                message: 'user updated successfully',
                            })
                        })
                }
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
    }
}