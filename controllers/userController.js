const Model = require('../models')
const hash = require('../helpers/hashhelper')

module.exports = {

    signup: (req, res) => {
        let password = hash.bcencode(req.body.password)
        Model.User.create({name:req.body.name, email:req.body.email, role:req.body.role, password})
        .then( response => {
            res.status(200).json({response})
        })
        .catch( err => {
            res.status(500).json({message: err.message})
        })
    },

    signin: (req, res) => {
        Model.User.findOne({where:{email:req.body.email}})
        .then( response => {
            if(response) {
                let password = hash.bcdecode(req.body.password, response.password)
                if(password) {
                    let token = hash.jwtencode({
                        id: response.id,
                        email: response.email,
                        role: response.role
                    })
                    res.status(201).json({"message": "Yei", "token": token})
                } else {
                    res.status(500).json({"message": "Password Not match"})
                }
            } else {
                res.status(404).json({"message": "Email not found"})
            }
        })
        .catch( err => {
            res.status(500).json({message: err.message})
        })
    },

    getAll: (req, res) => {
        Model.User.findAll()
        .then( response => {
            res.status(200).json({response})
        })
        .catch( err => {
            res.status(500).json({message: err.message})
        })
    },

    getOne: (req, res) => {
        Model.User.findOne({where:{id:req.params.id}})
        .then( response => {
            res.status(200).json({response})
        })
        .catch( err => {
            res.status(500).json({message: err.message})
        })
    },

    create: (req, res) => {
        Model.User.create({name: req.body.name, email: req.body.email, password: req.body.password}, {where:{id:req.params.id}})
        .then( response => {
            res.status(200).json({response})
        })
        .catch( err => {
            res.status(500).json({message: err.message})
        })
    },

    update: (req, res) => {
        Model.User.update({name: req.body.name, email: req.body.email, password: req.body.password}, {where:{id:req.params.id}})
        .then( response => {
            res.status(200).json({response})
        })
        .catch( err => {
            res.status(500).json({message: err.message})
        })
    },

    deleteOne: (req, res) => {
        Model.User.destroy({where:{id:req.params.id}})
        .then( response => {
            res.status(200).json({response})
        })
        .catch( err => {
            res.status(500).json({message: err.message})
        })
    }

}
