const jwt = require(`jsonwebtoken`)
const Model = require('../models/')
const User = Model.User

module.exports = {
    signUp: function (req, res) {
        var dataInput = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            role: `client`
        }

        User.create(dataInput)
            .then(user => {
                res.status(200).json({
                    userRegister: user
                })
            })
            .catch(err => {
                res.status(400).json({
                    err: err
                })
            })
    },

    getAll: function (req, res) {
        User.findAll()
            .then(users => {
                res.status(200).json({
                    userData: users
                })
            })
            .catch(err => {
                res.status(400).json({
                    err: err
                })
            })
    },

    getOne: function (req, res) {
        let id = req.params.id
        if (Number(id)) {
            User.findById(id)
                .then(user =>{
                    if(user){
                        res.status(200).json({
                            users: user
                        })
                    }else{
                        res.status(404).json({
                            err: `NOT FOUND`
                        })
                    }
                })
                .catch(err =>{
                    res.status(400).json({
                        err: err
                    })
                })
        }else{
            res.status(400).json({
                err: "INVALID INPUT"
            })
        }
    },

    login: function(req,res){
        let dataLogin = {
            email: req.body.email,
            password: req.body.password
        }

        User.findOne({where: dataLogin})
            .then(user =>{
                if(user){
                    jwt.sign({
                        id: user.id,
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        role: user.role
                    },`rahasia boy`, function(err,token){
                        res.status(200).json({
                           message: `Success Login`,
                           token: token
                        }) 
                    })
                }else{
                    res.status(500).json({
                        message: `username atau password salah`
                    })
                }
            })
            .catch(err =>{
                res.status(500).json({
                    message: err.message
                })
            })
    },

    create: function(req,res){
        var dataInput = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        }

        User.create(dataInput)
            .then(user => {
                res.status(200).json({
                    userRegister: user
                })
            })
            .catch(err => {
                res.status(400).json({
                    err: err
                })
            })
    },

    remove: function(req,res){
        let id = req.params.id

        if(Number(id)){
            User.destroy({
                where: {
                    id: id
                }
            })
                .then(success =>{
                    res.status(200).json({
                        message: `success delete`
                    })
                })
                .catch(err =>{
                    res.status(500).json({
                        message: err.message
                    })
                })
        }else{
            res.status(404).json({
                message: `invalid input id`
            })
        }
    },

    update: function(req,res){
        // let userLogin = req.decoded
        let keys = Object.keys(req.body);
        let values = Object.values(req.body);
        
        let update = {}

        keys.forEach((key,index) =>{
            update[key] = values[index]
        })
        // res.send(update)
        console.log('masukkkk')``
        User.update(update,{where:{id:req.params.id}})
            .then(userUpdated =>{

                values.forEach( ( value, index ) =>{
                    req.decoded[`${keys[index]}`] = value
                })
                // req.decod
                res.status(200).json({
                    message: `SuccessFull Update`,
                    // user: userUpdated
                })
            })
            .catch(err =>{
                res.status(500).json({
                    message: `Cant Update Data`
                })
            })
    }
}