require('dotenv').config();

const Models = require('../models/');
const User = Models.User;

const jwt = require('jsonwebtoken');
const encrypt = require('../helpers/encrypt');

module.exports = {  
  create: function(req, res) {
    User.create({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    })
    .then(newUser => {
      res.status(201).json({
        message: 'success create new data',
        user: newUser
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err
      });
    }); 
  },

  listAll: function(req, res) {
    User.findAll()
    .then(users => {
      res.status(200).json({
        message: 'success get all data',
        users: users
      })
    })
    .catch(err => {
      res.status(500).json({
        message: err
      });
    })
  },

  findById: function(req, res) {
    let id = parseInt(req.params.id);

    User.findById(id)
    .then(user => {
      res.status(200).json({
        message: 'success get data',
        user: user
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err
      });
    });
  },

  signup: function(req, res) {
    User.create({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    })
    .then(newUser => {
      res.status(201).json({
        message: 'success sign up'
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err
      });
    }); 
  },

  signin: function(req, res) {
    let input = {
      username: req.body.username,
      password: encrypt(req.body.password)
    }
    User.findOne({
      where: input
    })
    .then(user => {
      jwt.sign({
        username: user.username,
        role: user.role
      }, process.env.TOKEN_SECRET, (err, token) => {

        if(err) {
          res.status(401).json({
            message: 'You are not authenticated'
          });
        } else {
          res.json({
            message: 'success sign in',
            token: token
          });
        }

      });
    })
    .catch(err => {
      res.status(401).json({
        message: 'username or password wrong'
      });
    });
  },

  remove: function(req, res) {
    let id = parseInt(req.params.id);

    User.destroy({
      where: {
        id: id
      }
    })
    .then(affectedRow => {
      res.status(200).json({
        message: 'success delete data'
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err
      });
    });
  },

  update: function(req, res) {
    let id = parseInt(req.params.id);
    let input = {
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    };

    User.update(input, {
      where: {
        id: id
      }
    })
    .then(affectedRow => {
        res.status(200).json({
          message: 'success update data'
        });
      })
    .catch(err => {
      res.status(500).json({
        message: err
      });
    });
  }
}


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG5kb2UiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1MzU5NjU2NjF9.3FKgzk8SBzGbskmBq51xTBzZ6UnKHyGImdpTxY3MBPo
// {
//   "decoded": {
//       "username": "anniedoe",
//       "role": "client",
//       "iat": 1535963190
//   }
// }