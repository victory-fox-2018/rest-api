const Model = require('../models/index')
const User = Model.User
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = {
    signup: function (req, res) {

        let salt = bcryptjs.genSaltSync(8);
        let hashedPassword = bcryptjs.hashSync(req.body.password, salt);

        User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPassword,
            role: ''
        })
        .then((user) => {

            let data = {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
              };

            res.status(200).json({
                message: 'Signup Success !',
                data
            })
        }).catch((err) => {
            res.status(400).json({
                message: err.message
            })
        });
    },

    signin: function(req, res) {
        User.findOne({
            where: {email: req.body.email}
        })
        .then((user) => {
            let checkPassword = bcryptjs.compareSync(
                req.body.password,
                user.password
            );

            if (checkPassword) {
                let token = jwt.sign(
                  {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    role: user.role
                  },
                  process.env.JWT_SECRET
                );
      
                let data = {
                  token: token,
                  firstName: user.firstName,
                  lastName: user.lastName,
                  email: user.email
                };
                res.status(200).json({
                  message: "Signin Success !",
                  data: data
                });
              } else {
                res.status(400).json({
                  message: "Password Wrong"
                });
              }
        }).catch((err) => {
            res.status(400).json({
                message: "Email Wrong",
                err
            });
        });
    },

    getAll: function(req, res) {
        User.findAll()
        .then((result) => {
            res.status(200).json({
                message: "All Data Users",
                data: result
              });
        }).catch((err) => {
            res.status(400).json({
                message: err.message
            });
        });
    },

    getOne: function(req, res) {
        User.findOne({
            where: {id: req.params.id}
        })
        .then((result) => {
            res.status(200).json({
                message: "Data User",
                data: result
            });
        }).catch((err) => {
            res.status(400).json({
                message: err.message
            });
        });
    },

    createUser: function(req, res) {
        let salt = bcryptjs.genSaltSync(8);
        let hashedPassword = bcryptjs.hashSync(req.body.password, salt);

        User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPassword,
            role: ''
        })
        .then((user) => {

            let data = {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
              };

            res.status(200).json({
                message: 'Create User Success !',
                data
            })
        }).catch((err) => {
            res.status(400).json({
                message: err.message
            })
        });
    },

    updateUser: function(req, res) {
        let salt = bcryptjs.genSaltSync(8);
        let hashedPassword = bcryptjs.hashSync(req.body.password, salt);
        
        if(req.loggedInUser.id == req.params.id) {
            User.update({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: hashedPassword
            },{
                where: {id: req.params.id}
            })
            .then((result) => {
                res.status(200).json({
                    message: "Update User Success !",
                });
                
            }).catch((err) => {
                res.status(400).json({
                    message: err.message
                });
            });
        }else {
            res.status(200).json({
                message: "You dont have access to update !",
            });
        }  
    },

    deleteUser: function(req, res) {
        User.destroy({where: {id: req.params.id}})
        .then((result) => {
            if(result) {
                res.status(200).json({
                    msg: "Delete User Success !"
                })
            }else {
                res.status(200).json({
                    msg: "User not found !"
                })
            }
        })
        .catch((err) => {
            res.status(400).json({
                message: err.message
            });
        });
    }

}