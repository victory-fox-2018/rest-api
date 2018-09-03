const Model = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const showAllUser = (req, res) => {
    Model.User.findAll()
    .then((data) => {
        res.status(201).json({
            message: `show all users data`,
            data
        })
    })
    .catch((err) => {
        res.status(400).json({
            message: err.message
        })
    })
}

const showUserById = (req, res) => {
    Model.User.findById(req.params.id)
    .then((data) => {
        if (data) {
            res.status(201).json({
                message: `Get user data${data.firstName} ${data.lastName} with id ${req.params.id}`,
                data
            })
        } else {
            res.status(201).json({
                message: `data not found`
            })
        }
    })
    .catch((err) => {
        res.status(400).json({
            message: err.message
        })
    })
}

const register = (req, res) => {
    const {firstName, lastName, email, gender, role, password} = req.body
    Model.User.create({
       firstName,
       lastName,
       email,
       gender,
       role,
       password
    })
    .then((data) => {
        res.status(201).json({
            message: `success add new user`,
            data
        })
    })
    .catch((err) => {
        res.status(400).json({
            message: err.message
        })
    })
}

const login = (req, res) => {
    const { email, password } = req.body
    Model.User.findOne({
        where: {email: email}
    })
    .then((data) => {
        if(data) {
            let passwordCheck = bcrypt.compareSync(password, data.password) 
            if (passwordCheck) {
                let token = jwt.sign({
                    email: data.email,
                    role: data.role.toLowerCase()
                }, process.env.JWT_SECRET)
                console.log('ini token ===>', token)
                
                res.status(200).json({
                    message: `Successfully login`,
                    token
                })
            } else {
                res.status(200).json({
                    message: `password is invalid`
                })
            } 
        } else {
            res.status(200).json({
                message: `email is invalid`
            })
        }
    })
    .catch((err) => {
        res.status(400).json({
            message: err.message
        })
    })
}

const updateUser = (req, res) => {
    const {firstName, lastName, email, gender, role, password} = req.body
    Model.User.update({
        firstName,
        lastName,
        email,
        gender,
        role,
        password
    }, 
    {
        where: {id: req.params.id}    
    })
    .then((data) => {
        res.status(201).json({
            message: `success update data with id ${req.params.id}`,
            data
        })
    })
    .catch((err) => {
        res.status(400).json({
            message: err.message
        })
    })
}

const deleteUserData = (req, res) => {
    Model.User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(() => {
        res.status(201).json({
            message: `success delete data with id ${req.params.id}`
        })
    })
    .catch((err) => {
        res.status(400).json({
            message: err.message
        })
    })
}

module.exports = {
    showAllUser,
    showUserById,
    register,
    login,
    updateUser,
    deleteUserData
}