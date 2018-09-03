const Model = require('../models')

module.exports = {

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
        Model.User.findOne({id:req.params.id})
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
