const model = require('../models')
const UserData = model.UserData
const crypto = require('crypto')
const jwt = require('jsonwebtoken');

class Controller {
  static findAll(req, res) {
    UserData.findAll({
      order: [['id', 'ASC']]
    })
    .then( users => {
      res.status(200).json(users)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static signUp (req, res) {
    UserData.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role
    })
    .then(userData => {
      console.log("masuk");
      res.status(200).json(userData)
    })
    .catch(err => {
      console.log("tidak masuk");
      res.status(500).json(err)
    })
  }

  static signIn (req, res) {
    let emailInput = req.body.email
    let passwordInput = req.body.password
    UserData.findOne({
      where: {
        email: emailInput,
        password: passwordInput
      }
    })
    .then(userdata => {
      if(userdata) {
        jwt.sign({
          username:req.body.username
        }, 'secret', (err, token) => {
          if(err){
            res.status(404).json('Not Found')
          } else{
            res.status(200).json({message: "Sukses", token: token})
          }
        })
      }
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static userInfo(req, res) {
    UserData.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(userdata => {
      res.status(200).json(userdata)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static createAdmin(req, res) {
    UserData.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role
    })
    .then(userData => {
      res.status(200).json(userData)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static deleteUser(req, res) {
    UserData.destroy({
      where : {
        id: req.params.id
      }
    })
    .then(data => {
      res.status(200).json("Data has been deleted")
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static updateUser(req, res) {
    let newData = {}

    let keys = Object.keys(req.body)
    let values = Object.values(req.body)

    for (let i = 0; i < keys.length; i++) {
      newData[keys[i]] = values[i]
    }
    UserData.update(
      newData,
      {
        where: {
          id: req.params.id
        }
      }
    )
    .then(userdata => {
      res.status(200).json(userdata)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }
}

module.exports = Controller
