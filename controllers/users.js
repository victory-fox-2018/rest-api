const Model = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const saltRounds = 10

const signUp = function (req, res) {
    let salt = bcrypt.genSaltSync(saltRounds)
    let hash = bcrypt.hashSync(req.body.password, salt)
    Model.User.findOne({
        where: {
            email: req.body.email
        },
    })
    .then(function (user) {
        if (!user) {
            let { username, email, role } = req.body
            Model.User.create({
                username: username,
                password: hash,
                email: email,
                role: role
            })
            .then(function (newUser) {
                res.status(200).json({
                    message: "register success",
                    data: newUser
                })
            })
            .catch(function (err) {
                res.status(400).json({
                    message: "register failed",
                    error: err.message
                })
            })
        } else {
            res.status(404).json({
                message: "email has been used"
            })
        }
    })
    .catch(function (err) {
        res.status(500).json({
            message: "error server while register"
        })
    })
}

const signIn = function (req, res) {
    Model.User.findOne({
        where: {
            username: req.body.username
        }
    })
        .then(function (user) {
            if (user) {
                let token = jwt.sign({ id: user.id, username: user.username, email: user.email, role: user.role }, process.env.JWT_KEY)
                let decodedPass = bcrypt.compareSync(req.body.password, user.password)
                if (decodedPass) {
                    res.status(200).json({ token })
                } else {
                    res.status(400).json({ message: "email/password is wrong" })
                }
            }
        })
        .catch(function (err) {
            res.status(500).json({ message: "user not found", error: err.message })
        })
}

const getUsers = function (req, res) {
    Model.User.findAll()
        .then(function (users) {
            res.status(200).json({
                message: "data users found",
                data: users
            })
        })
        .catch(function (err) {
            res.status(400).json({
                message: "error get data users",
                error: err.message
            })
        })
}

const getUserById = function (req, res) {
    Model.User.findById(req.params.id)
    .then(function (userById) {
        res.status(200).json({
            message: "data found",
            data: userById
        })
    })
    .catch(function (err) {
        res.status(400).json({
            message: "data not found",
            error: err.message
        })
    })
}

const deleteUser = function (req, res) {
    if (req.user){
        Model.User.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function () {
            res.status(200).json({ message: "delete user success" })
        })
        .catch(function () {
            res.status(400).json({ message: "delete user failed" })

        })
    }
}

const updateUser = function (req, res) {
    let { username, email, role } = req.body
    let salt = bcrypt.genSaltSync(saltRounds)
    let hash = bcrypt.hashSync(req.body.password, salt)


    if (req.user.id == req.params.id) {
        Model.User.update({
            username: username,
            email: email,
            password: hash,
            role: role
        },
            {
                where: { id: req.params.id }
            })
            .then(function (updatedUser) {
                res.status(200).json({
                    message: "update success",
                    data: updatedUser
                })
            })
            .catch(function (err) {
                res.status(400).json({
                    message: "update failed",
                    error: err.message
                })
            })
    } else {
        res.status(400).json({
            message: "you are not authorize to update this page"
        })
    }

}

const createUser = function (req, res) {
    let salt = bcrypt.genSaltSync(saltRounds)
    let hash = bcrypt.hashSync(req.body.password, salt)
    Model.User.findOne({
        where: { username: req.body.username }
    })
    .then(function (user) {
        if (!user) {
            let { username, email } = req.body
            Model.user.create({
                username: username,
                password: hash,
                email: email,
                role: 'user'
            })
            .then(function (newUser) {
                res.status(200).json({
                    message: "create user success",
                    data: newUser
                })
            })
            .catch(function (err) {
                res.status(400).json({
                    message: "create user failed",
                    error: err.message
                })
            })
        } else {
            res.status(404).json({
                message:"username already used",
            })
        }
    })
    .catch(function (err) {
        res.status(500).json({
            message:"error create user",
            error:err.message
        })
    })
}



module.exports = { getUsers, signIn, signUp, deleteUser, getUserById, updateUser, createUser }

