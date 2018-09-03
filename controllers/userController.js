const {User} = require('../models')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
require('dotenv').config()


module.exports = {

    signup : function(req,res) {
        let salt = crypto.createHash('md5').update(req.body.email).digest('hex')
        let combined = req.body.password + salt
        let encryptedPassword = crypto.createHash('md5').update(combined).digest('hex')
        User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: encryptedPassword,
            role: req.body.role
        })
        .then(function(){
            res.status(200).json({
                message: 'success'
            })
        })
        .catch(function(err){
            res.status(500).json({
                message: err.message
            })
        })
    },


    signin : function(req,res) {
        let salt = crypto.createHash('md5').update(req.body.email).digest('hex')
        let combined = req.body.password + salt
        let encryptedPassword = crypto.createHash('md5').update(combined).digest('hex')
        User.findOne({
            where : {
                email: req.body.email,
                password: encryptedPassword
            }
        })
        .then(function(data){
            if (!data) {
                res.status(500).json({
                    message: 'wrong password or username'
                })
            } else {
                jwt.sign({
                    id : data.id,
                    email: data.email,
                    role: data.role
                },process.env.JWT_SECRET_KEY,function(err,token){
                    if (err) {
                        res.status(500).json({
                            message : err
                        })
                    } else {
                        res.status(200).json({
                            message: 'login success',
                            token : token
                        })
                    }
                })
            }
        })
        .catch(function(err){
            res.status(500).json({
                message: err.message
            })
        })
    },


    getAllUsers: function(req,res) {
        User.findAll()
        .then(function(data){
            res.status(200).json({
                users: data,
                message: 'success' 
            })
        })
        .catch(function(err){
            res.status(500).json({
                message: err.message
            })
        })
    },

    getOneUser: function(req,res) {
        const userId = req.decoded.id
        User.findById(req.params.id)
        .then(function(data){
            if (data && userId==req.params.id) {
                res.status(200).json({
                    userData : data,
                })
            } else if (data && userId!=req.params.id) {
                res.status(401).json({
                    message : 'unauthorized'
                })
            } else {
                res.status(404).json({
                    message: 'user not found'
                })
            }
        })
        .catch(function(err){
            res.status(500).json({
                message : err.message
            })
        })
    },

    createUser : function(req,res) {
        let salt = crypto.createHash('md5').update(req.body.email).digest('hex')
        let combined = req.body.password + salt
        let encryptedPassword = crypto.createHash('md5').update(combined).digest('hex')
        User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: encryptedPassword,
            role: req.body.role
        })
        .then(function(){
            res.status(200).json({
                message: 'success'
            })
        })
        .catch(function(err){
            res.status(500).json({
                message: err.message
            })
        })
    },

    deleteUser : function(req,res) {
        console.log('masukkkkkkkk')
        User.destroy({
            where : {
                id : req.params.id
            }
        })
        .then(function(){
            res.status(200).json({
                message : 'success'
            })
        })
        .catch(function(err){
            res.status(500).json({
                message: err.message
            })
        })
    }
}