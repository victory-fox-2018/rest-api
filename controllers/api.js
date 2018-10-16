const { User } = require('../models')
const {hashPassword} = require('../helpers/hash')
var jwt = require('jsonwebtoken')

module.exports = {
  getUsers: (req, res) => {
    User.findAll()
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({error: `Can't get data`})
      })
  },
  
  createUser: (req, res) => {
    User.create({
      name: req.body.name,
      username: req.body.username,
      password: req.body.password
    })
      .then(() => {
        res.status(200).json({message: 'Register user berhasil!'})
      })
      .err(err => {
        console.log(err);
        res.status(500).json({error: 'Register user gagal!'})
      })
  },
  
  login: (req, res) => {
    User.findOne({
      where: {
        username: req.body.username,
        password: hashPassword(req.body.password, process.env.HASH_SECRET)
      }
    })
      .then(data => {
        let user = {
          id: data.id,
          username: data.username,
          role: data.role
        }
        
        jwt.sign(user, process.env.JWT_SECRET, (err, token) => {
            if (err) {
              console.log(err);
              res.status(500).json({error: err})
            } else {
              res.status(200).json({token: token})
            }
        })
      })
      .catch(err => {
        res.status(500).json({error: 'wrong username or password'})
      })
  },
  
  getUserById: (req, res) => {
    User.findById(req.params.id)
      .then(data => {
        if (data) {
          res.status(200).json({user: data})
        } else {
          res.status(404).json({error: `User ${req.params.id} not found!`})
        }
      })
      .catch(err => {
        res.status(500).json({error: err})
      })
  },
  
  removeUser: (req, res) => {
    User.destroy({
      where: {id: req.params.id}
    })
    .then(data => {
      if (data) {
        res.status(200).json({message: `User ${req.params.id} deleted!`})
      }else {
        res.status(404).json({error: `User ${req.params.id} not found!`})
      }
    })
    .catch(err => {
      res.status(500).json({error: err})
    })
  },
  
  updateUser: (req, res) => {
    User.update(
      {
        name: req.body.name,
        username: req.body.username,
        password: hashPassword(req.body.password, process.env.HASH_SECRET)
      },
      {where: {id: req.params.id}}
    )
      .then(data => {
        if (data) {
          res.status(200).json({message: `User ${req.params.id} updated!`})
        }else {
          res.status(404).json({error: `User ${req.params.id} not found!`})
        }
      })
      .catch(err => {
        res.status(500).json({error: err})
      })
  }
}