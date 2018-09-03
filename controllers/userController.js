const userModel = require('../models').User
const jwt = require('jsonwebtoken');

class UserController {

    static signUp(req, res) {
        userModel.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
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
        userModel.findOne({where: {email: req.body.email, password: req.body.password}})
        .then(user => {
            if (user) {
                jwt.sign({
                    name: user.name,
                    email: user.email,
                    role: user.role
                }, 'secret')
                res.status(201).json({message: `${user.role} ${user.name} signed in successfully`})
            } else {
                res.status(403).json({message: 'Incorrect email and/or password'})
            }
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
    }
}

module.exports = UserController