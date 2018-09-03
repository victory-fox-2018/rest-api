require('dotenv').config()

const {User} = require('../models'),
      jwt = require('jsonwebtoken');

module.exports = {
    echo: (req, res) => {
        res.status(200).json({
            message: 'connected'
        })
    },

    login: (req, res) => {
        User.findOne({
            where : {
                username: req.body.username,
                password: req.body.password
            }
        })
        .then(user => {
            jwt.sign({
                username: user.username,
                role: user.role
            }, process.env.Secret, function (err, token) {
                if (!err) {
                    res.status(200).json({
                        token: token
                    })
                }
                else res.status(404).json({
                    message: 'username not found'    
                })
            })
        })
        .catch(e => {
            res.status(500).json({
                message: e.message
            })
        })
    },

    list: (req, res) => {
        User.findAll()
        .then(users => {
            res.status(200).json({
                users: users
            })
        })
        .catch(e => {
            res.status(500).json({
                message: err.message
            })
        })
    },
    
    create: (req, res) => {
        User.create({
            username: req.body.username,
            password: req.body.password,
            role: req.body.role
        })
        .then(() => {
            res.status(201).json({
                message: 'succesfully created user'
            })
        })
        .catch(e => {
            res.status(500).json({
                message: err.message
            })
        })
    }
}