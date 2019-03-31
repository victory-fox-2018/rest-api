
const jwt = require('jsonwebtoken');
const User = require('../models').User;

module.exports = {
  findAll: function(req,res) {
    User.findAll()
      .then(users => {
        res.status(200).json(users)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  },
  findOne: function(req,res) {
    User.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(user => {
        res.status(200).json(user)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  },
  register: function(req,res) {
    console.log(req.body.username)
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role
    })
      .then(() => {
        res.status(201).json({
          message: 'user sign up success!'
        })
      })
      .catch(err => {
        res.status(500).json(err)
      })
  },
  erase: function(req,res) {
    User.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(() => {
        res.status(200).json({
          message: 'user delete success!'
        })
      })
      .catch(err => {
        res.status(500).json(err)
      })
  },
  edit: function(req,res) {
    User.update({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role
    }, {
      where: {
        id: req.params.id
      }
    })
      .then(() => {
        res.status(200).json({
          message: 'update success!'
        })
      })
      .catch(err => {
        res.status(500).json(err)
      })
  },
  signIn: function(req,res) {
    User.findOne({
      where: {
        username: req.body.username
      }
    })
      .then(user => {
        if (user === null || user === undefined) {
          res.status(500).json({
            message: 'invalid username'
          })
        } else {
          if (user.validPassword(req.body.password, user.password)) {
            jwt.sign({id: user.id, username: user.username, role: user.role}, process.env.SECRET_KEY, (err, token) => {
              res.status(200).json({
                user: user.username,
                message: 'login success!',
                token: token
              })
            })
          } else {
            res.status(500).json({
              message:'invalid password'
            })
          }
        }
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
}