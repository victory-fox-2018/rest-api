require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/').User;
const crypto = require('crypto');

class Controller {
  static signup(req, res) {
    User
      .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        password: req.body.password,
        gender: req.body.gender,
        phone: req.body.phone,
        location: req.body.location,
        role: req.body.role
      })
      .then(user => {
        res.status(200).json(user);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }

  static signin(req, res) {
    let salt = crypto.createHash('md5').update(req.body.username).digest('hex');
    let combined = req.body.password + salt;
    let encryptedPassword = crypto.createHash('md5').update(combined).digest('hex');
    
    User
      .findOne({where: {
        username: req.body.username,
        password: encryptedPassword
      }})
      .then(user => {
        if(user.username === req.body.username) {
          if(user.password === encryptedPassword) {
            const token = jwt.sign({
              username: user.username,
              role: user.role
            }, 'shhh');
            res.status(200).json({
              message: `${user.username} successfully logged in`,
              token
            });
          } else {
            res.status(404).json({message: 'Password is wrong!'});
          }
        } else {
          res.status(404).json({message: 'Hii ${req.body.username}, you has not registed!!'});
        }
      })
      .catch(err => {
        res.status(500).json(err.message);
      });
  }

  static findAll(req, res) {
    User
      .findAll()
      .then(users => {
        res.status(200).json(users);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }

  static findOne(req, res) {
    User
      .findOne({where: {
        id: req.params.id
      }})
      .then(user => {
        res.status(200).json(user);
      })
      .catch(err => {
        res.status(500).json(err.message);
      })
  }

  static create(req, res) {
    User
      .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        password: req.body.password,
        gender: req.body.gender,
        phone: req.body.phone,
        location: req.body.location,
        role: req.body.role
      })
      .then(user => {
        res.status(200).json(user);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }

  static erase(req, res) {
    User
      .findOne({where: {id: req.params.id}})
      .then(user => {
        if(user) {
          User
            .destroy({where: {id: req.params.id}})
            .then(deleted => {
              res.status(200).json({msg: 'Data has been deleted'});
            })
        } else {
          res.status(400).json({msg: 'Data not found!'});
        }
      })
      .catch(err => {
        res.status(500).json(err.message);
      });
  }

  static update(req, res) {
    let update = {};
    let keys = Object.keys(req.body);
    let values = Object.values(req.body);
    for(let i = 0; i < keys.length; i++) {
      update[keys[i]] = values[i];
    }
    User
      .update(update, {where: {id: req.params.id}})
      .then(user => {
        res.status(200).json({
          message: 'Data has been update'
        })
      }) 
      .catch(err => {
        res.status(500).json(err.message);
      })
  }

}

module.exports = Controller;