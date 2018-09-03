require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/').User;


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
    User
      .findOne({where: {
        username: req.body.username,
        password: req.body.password
      }})
      .then(user => {
        if(user.username === req.body.username) {
          if(user.password === req.body.password) {
            console.log('masuk nih')
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

  // static isLogin(req, res, next) {
  //   console.log(req.headers.token)
  //   const token = req.headers.token;
  //   jwt.verify(token, shhh, (err, decoded) => {
  //     console.log(decoded);
  //     res.send(decoded);
  //   })
  // }

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



  



}

module.exports = Controller;