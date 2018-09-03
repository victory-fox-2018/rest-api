const userModel = require('../models').User
const jwt = require('jsonwebtoken')
const Encryption = require('../helpers/encryption')

class UserController {

    static signUp(req, res) {
        userModel.create({
            name: req.body.name,
            email: req.body.email,
            password: Encryption.passwordGenerator(req.body.password),
            role: 'user',
            createdAt: new Date(),
            updatedAt: new Date()
        })
        .then(() => {
            res.status(201).json({message: `User (${req.body.name}) sign up successfull`})
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
    }

    static signIn(req, res) {
        userModel.findOne({where: {email: req.body.email, password: Encryption.passwordGenerator(req.body.password)}})
        .then(user => {
            if (user) {
                jwt.sign({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    role: user.role
                }, process.env.JWT_KEY, (err, token) => {
                    if (err) {
                        res.status(500).json({message: err.message})
                    } else {
                        res.status(201).json({message: `${user.role} ${user.name} signed in successfully`, token: token})
                    }
                })
            } else {
                res.status(403).json({message: 'Incorrect email and/or password'})
            }
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
    }

    static showAll(req, res) {
        userModel.findAll()
        .then(data => {
            res.status(200).json({data: data})
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
    }

    static showOne(req, res) {
        userModel.findById(req.params.id)
        .then(datum => {
            res.status(200).json({data: datum})
        })
        .catch(err => {
            res.status(500).json({err: err.message})
        })
    }

    static add(req, res) {
        userModel.create({
            name: req.body.name,
            email: req.body.email,
            password: Encryption.passwordGenerator(req.body.password),
            role: 'user',
            createdAt: new Date(),
            updatedAt: new Date()
        })
        .then(() => {
            res.status(201).json({message: `User (${req.body.name}) successfully added`})
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
    }

    static edit(req, res) {
        userModel.update({
            name: req.body.name,
            email: req.body.email,
            password: Encryption.passwordGenerator(req.body.password),
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.status(201).json({message: `User data updated`})
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
    }

    static destroy(req, res) {
        userModel.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.status(201).json({message: `User data deleted`})
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
    }
}

module.exports = UserController