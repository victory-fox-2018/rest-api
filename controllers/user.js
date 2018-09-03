require('dotenv').config()

const {User} = require('../models'),
      jwt = require('jsonwebtoken'),
      hashPass = require('../helpers/hashPassword');

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
                password: hashPass(req.body.password)
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
                message: e.message
            })
        })
    },
    
    create: (req, res) => {
        User.create({
            username: req.body.username,
            password: hashPass(req.body.password),
            role: req.body.role,
            email: req.body.email
        })
        .then(() => {
            res.status(201).json({
                message: 'succesfully created user'
            })
        })
        .catch(e => {
            res.status(500).json({
                message: e.message
            })
        })
    },

    listOne: (req, res) => {
        User.findOne({
            where : {
                id: req.params.id
            }
        })
        .then(user => {
            res.status(200).json({
                user:user
            })
        })
        .catch(e => {
            res.status(404).json({
                message: e.message
            })
        })
    },

    update: (req, res) => {
        User.update({
            username: req.body.username,
            password: hashPass(req.body.password),
            email: req.body.email,
            updatedAt: new Date(),
          }, {
            where : {
                id: req.params.id
            }
        })
        .then(() => {
            res.status(200).json({
                message: 'succesfully updated user'
            })
        })
        .catch(e => {
            res.status(500).json({
                message: e.message
            })
        })
    },

    remove: (req, res) => {
        User.destroy({
            where : {
                id: req.params.id
            }
        })
        .then(() => {
            res.status(200).json({
                message: 'succesfully deleted user'
            })
        })
        .catch(e => {
            res.status(404).json({
                message: e.message
            })
        })
    }
}