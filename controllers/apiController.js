const { User } = require('../models')
const jwt      = require('jsonwebtoken');
const checkPassword = require('../helper/checkPassword')

module.exports = {
    findAll: function(req,res){
        User.findAll()
        .then( users => {
            res.status(200).json({
                users : users
            })
        })
        .catch ( err => {
            res.status(500).json({
                error : err.message
            })
        })
    },

    signup: function(req,res){
        User.create({
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            email : req.body.email,
            password: req.body.password,
            role : req.body.role
        })
        .then( user => {
            res.status(200).json({
                user: user
            })
        })
        .catch( err => {
            res.status(500).json({
                error : err.message
            })
        })
    },

    signin: function(req,res){

        let passwordUser = checkPassword(req.body.password, req.body.email)

        User.findOne({ where: {email: req.body.email, password: passwordUser} })
        .then( user => {
            if(user){
                jwt.sign({ 
                    id : user.id,
                    firstName : user.firstName,
                    email: user.email,
                    role: user.role,
                 }, process.env.KEY_HARLES , function(err, token) {
                    if(!err){
                        res.status(200).json({
                            message : `login success`,
                            token : token
                        })
                    } else {
                        res.status(500).json({
                            error : err.message
                        })
                    }
                });
            }
        })
        .catch( err => {
            res.status(500).json({
                error : err.message
            })
        })
    },

    getOne: function(req,res){
        User.findById(req.params.id)
        .then( user => {
            res.status(200).json({
                user : user
            })
        })
        .catch( err => {
            res.status(500).json({
                error : err.message
            })
        })
    },

    create: function(req,res){
        User.create(req.body)
        .then( user => {
            res.status(200).json({
                message : `insert user success`,
            })
        })
        .catch( err => {
            res.status(500).json({
                error : err.message
            })
        })

    },

    remove: function(req,res){
        User.destroy({
            where : {id : req.params.id}
        })
        .then( () => {
            res.status(200).json({
                message : `delete success`,
            })
        })
        .catch( err => {
            res.status(500).json({
                error : err.message
            })
        })
    },

    update: function(req,res){
        User.update(
            {
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                email : req.body.email,
                password: req.body.password,
                role : req.body.role
            },
            {where : { id : req.params.id }}
        )
        .then( user => {
            res.status(200).json({
                message : `update data success`,
                user : user
            })
        })
        .catch( err => {
            res.status(500).json({
                error : err.message
            })
        })
    }
    
}